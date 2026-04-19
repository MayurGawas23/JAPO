import Header from '@/components/Header'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import React, { useState } from 'react'
import { parse } from "cookie";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';



export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.token;
  const { paperId } = context.params

  if (!token) {
    return {
      props: {
        papers: [],
        reviewers: [],
        initialError: "Authentication token not found. Please log in.",
      },
    };
  }

  try {
    const [papersRes, reviewersRes] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/papers/${paperId}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/reviewers`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    return {
      props: {
        paper: papersRes.data,
        reviewers: reviewersRes.data,
        initialError: "",
      },
    };
  } catch (err) {
    return {
      props: {
        paper: [],
        reviewers: [],
        initialError: err.response?.data?.error || "Failed to fetch data. Please try again.",
      },
    };
  }
};

const PaperDetails = ({ paper, reviewers, initialError }) => {
  // console.log("paperf", paper.paperId)
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [selectedReviewers, setSelectedReviewers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(initialError || "");

  const token = Cookies.get('token')
  console.log(token);

  const router = useRouter()


  const handleAssign = async () => {
    setMessage("");
    setError("");

    if (selectedReviewers.length === 0) {
      setError("Please select at least one reviewer.");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/papers/assign-reviewers`,
        {
          paperId: paper.paperId,
          reviewers: selectedReviewers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Reviewers assigned successfully!");
      setIsModalOpen(false); // ✅ CLOSE MODAL
      setSelectedReviewers([]); // optional cleanup
      router.push('/editor/assign-reviewers')
    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Error assigning reviewers"
      );
    }
  };

  return (
    <div>
      <Header />
      <p>HI</p>
      <p>{paper.paperId}</p>
      <p>{paper.paperTitle}</p>
      <p>{paper.type}</p>
      <h3 className="font-bold">Suggested Reviewers</h3>

      {paper.suggestedreviewers?.length > 0 ? (
        <ul className="mt-2 space-y-2">
          {paper.suggestedreviewers.map((rev) => (
            <li key={rev._id} className="border p-2 rounded">
              <p><strong>Name:</strong> {rev.username}</p>
              <p><strong>Email:</strong> {rev.email}</p>
              <p><strong>Affiliation:</strong> {rev.affiliation}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No suggested reviewers</p>
      )}
      <Button
        onClick={() => {
          setSelectedPaper(paper.paperTitle);
          setSelectedReviewers([]);
          setIsModalOpen(true);
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Assign Reviewers
      </Button>

      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogTitle>
              Select Reviewers for "{paper.paperTitle}"
            </DialogTitle>

            <DialogDescription>
              Choose reviewers for this paper
            </DialogDescription>
            {error && (
              <p className="mt-4 text-red-600 font-medium">
                {error}
              </p>
            )}
            <div className="space-y-3 mt-4">
              {reviewers.map((reviewer) => (
                <label key={reviewer._id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={reviewer.username}
                    checked={selectedReviewers.includes(reviewer.username)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedReviewers((prev) =>
                        prev.includes(value)
                          ? prev.filter((r) => r !== value)
                          : [...prev, value]
                      );
                    }}
                  />
                  {reviewer.username} ({reviewer.email})
                </label>
              ))}
            </div>

            <DialogFooter>
              <Button
                onClick={handleAssign}
                className="bg-green-600"
              >
                Confirm Assignment
              </Button>

              <Button
                variant="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      )}

      {message && (
        <p className="mt-4 text-green-600 font-medium">
          {message}
        </p>
      )}





    </div>
  )
}

export default PaperDetails