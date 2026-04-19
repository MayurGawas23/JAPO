import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie"; // Client-side cookies library
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { parse } from "cookie";
import JournalCoverImg from "@/components/file-upload";
import { Dialog, DialogTitle, DialogContent, DialogFooter, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { ArrowLeft, SettingsIcon } from "lucide-react";
import { useAuth } from '../../../../utils/auth'
import FileUpload from "@/components/file-upload";
import Link from "next/link";

const SubmitPaper = ({ reviewers }) => {
    const [file, setFile] = useState(null);
    const [uploadedFileUrl, setUploadedFileUrl] = useState("");
    const [fileLoading, setFileLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReviewers, setSelectedReviewers] = useState([]);
    const [suggestedReviewers, setSuggestedReviewers] = useState([]);

    const [journal, setJournal] = useState(null);
    const [message, setMessage] = useState("");
    // Paper fields
    const [paperTitle, setPaperTitle] = useState("");
    const [indexTerms, setIndexTerms] = useState("");
    const [abstract, setAbstract] = useState("");
    const [references, setReferences] = useState([""]);
    const [coauthors, setCoauthors] = useState([{ username: "", email: "", affiliation: "" }]);
    const [pages, setPages] = useState("");
    const [type, setType] = useState("")
     const [jshorttitle, setJshorttitle] = useState("")

    const { user } = useAuth()

    const router = useRouter();
    const { short_title } = router.query;

    useEffect(() => {
        if (short_title) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals/${short_title}`)
                .then((res) => res.json())
                .then((data) => {
                    setJournal(data);
                    setJshorttitle(data.short_title);  // ✅ Set jshorttitle here
                })
                .catch((err) => console.error("Error fetching journal:", err));
        }
    }, [short_title]);
    
    const handleAddReference = () => setReferences([...references, ""]);
    const handleAddCoauthor = () => setCoauthors([...coauthors, { username: "", email: "", affiliation: "" }]);
    const handleAssign = () => {
        if (selectedReviewers.length === 0) {
            alert("Please select at least one reviewer.");
            return;
        }
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get("token");
            if (!token) {
                setMessage("You must be logged in to submit a paper.");
                return;
            }
    
            console.log("Submitting paper with journalId:", jshorttitle); // ✅ Debugging Log
    
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/papers/submit`,
                {
                    paperTitle,
                    abstract,
                    indexTerms,
                    references,
                    pages,
                    journalId: jshorttitle, // ✅ Ensure this is set
                    journalName: journal?.journalName || "",
                    pdf: uploadedFileUrl,
                    suggestedReviewers,
                    coauthors,
                    type
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            setMessage("Paper submitted successfully!");
            setPaperTitle("");
            setAbstract("");
            setIndexTerms("");
            setReferences([""]);
            setPages("");
            setSuggestedReviewers([]);
            setCoauthors([{ username: "", email: "", affiliation: "" }]);
            setType("");
            setJshorttitle("");
            router.push("/user-papers");
        } catch (err) {
            setMessage(err.response?.data?.error || "An error occurred.");
        }
    };

    const handleReviewerSelect = (reviewerId) => {
    setSuggestedReviewers((prev) => {
      if (prev.includes(reviewerId)) {
        return prev.filter((id) => id !== reviewerId);
      }

      if (prev.length >= 2) {
        alert("You can select only 2 reviewers");
        return prev;
      }

      return [...prev, reviewerId];
    });
  };
    

    //     const isValidCoauthors = coauthors.every(coa => coa.email.trim() !== "");
    // if (!isValidCoauthors) {
    //     setMessage("Please fill out all required co-author fields.");
    //     return;
    // }

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center h-full p-10 bg-grasy-100">
                <div className="text-left w-[60%] mb-4">
                   <Link
            href={`/journals/${short_title}`}
            className="text-blue-500 hover:underline  mb-4 flex "
          >
           <ArrowLeft/> Back 
          </Link>
                    <h1 className="text-2xl  font-[poppins-semibold] mb-8">Paper Submission for Journal</h1>
                    <img src={journal?.coverImg} alt="" className="w-20 mb-2.5 " />
                    <h2 className="text-xl font-bold mb-4"><span className="font-medium"></span> {journal ? ` ${journal.journalName} (${journal.short_title})` : "Loading..."}</h2>
                </div>
                <div className="bg-blue-400 w-[60%]">
                    <form className="bg-white p-6 shadow-md rounded w-full" onSubmit={handleSubmit}>
                        {/* <label className="block font-bold">Selected Journal:</label>
                        <h1 className="mb-4 font-bold text-lg">{journal ? ` ${journal.journalName} (${journal.short_title})` : "Loading..."}</h1> */}
                        {message && (
                            <p className={`mb-4 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{message}</p>
                        )}
                        <h2 className="border-b font-bold">Author's Information</h2>
                        <h3 className="font-bold text-zinc-500"><span className="font-medium text-black">Name: </span>{user.username}</h3>
                        <h3 className="font-bold text-zinc-500"><span className="font-medium text-black">Email:</span>  {user.email}</h3>
                        <h2 className="font-bold text-zinc-500"><span className="font-medium text-black">Affiliation:</span>  {user.affiliation}</h2>
                        <h2 className="font-bold text-zinc-500 border-b mb-4"><span className="font-medium text-black">WhatsApp No: </span> {user.mobno}</h2>
                        <label className="font-bold ">Paper Title</label>
                        <input type="text" className="w-full border rounded-lg p-2  mb-4 outline-zinc-500" placeholder="Paper Title" value={paperTitle} onChange={(e) => setPaperTitle(e.target.value)} required />

                        <label className="mb-2 block font-bold">Type of Manuscript</label>

                        <div className="flex gap-2 my-2">
                            <input
                                type="radio"
                                id="research"
                                name="manuscriptType"
                                value="Research Paper"
                                checked={type === "Research Paper"}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label htmlFor="research">Research Paper</label>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <input
                                type="radio"
                                id="review"
                                name="manuscriptType"
                                value="Review Paper"
                                checked={type === "Review Paper"}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label htmlFor="review">Review Paper</label>
                        </div>
                        <label className="font-bold">Abstract</label>
                        <textarea className="w-full border rounded-lg p-2 mb-4" placeholder="Abstract" value={abstract} onChange={(e) => setAbstract(e.target.value)} required />
                        <label className="font-bold">Key Words</label>
                        <input type="text" className="w-full border rounded-lg p-2 mb-4" placeholder="Keywords (comma separated)" value={indexTerms} onChange={(e) => setIndexTerms(e.target.value)} required />

                        <h3 className="font-bold">Add Co-Authors</h3>
                        {coauthors.map((coa, index) => (
                            <div key={index} className="space-y-2 mb-4">
                                <input
                                    type="text"
                                    className="w-full border p-2"
                                    placeholder="Co-author Name"
                                    value={coa.username}
                                    onChange={(e) => {
                                        const newCoauthors = [...coauthors];
                                        newCoauthors[index].username = e.target.value;
                                        setCoauthors(newCoauthors);
                                    }}
                                />
                                <input
                                    type="email"
                                    className="w-full border p-2"
                                    placeholder="Co-author Email"
                                    value={coa.email}
                                    onChange={(e) => {
                                        const newCoauthors = [...coauthors];
                                        newCoauthors[index].email = e.target.value;
                                        setCoauthors(newCoauthors);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="w-full border p-2"
                                    placeholder="Co-author Affiliation"
                                    value={coa.affiliation}
                                    onChange={(e) => {
                                        const newCoauthors = [...coauthors];
                                        newCoauthors[index].affiliation = e.target.value;
                                        setCoauthors(newCoauthors);
                                    }}
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddCoauthor} className="bg-blue-500 text-white px-2 py-1 rounded mb-4">+ Add Co-authors</button><br></br>
                        <h3 className="font-bold mt-4">References:</h3>
                        {references.map((ref, index) => (
                            <input key={index} type="text" className="w-full border p-2 mb-2" value={ref} onChange={(e) => {
                                const newReferences = [...references];
                                newReferences[index] = e.target.value;
                                setReferences(newReferences);
                            }} />
                        ))}
                        <button type="button" onClick={handleAddReference} className="bg-blue-500 text-white px-2 py-1 rounded mb-4">+ Add References</button><br></br>
                        <div className="flex flex-col">
                            {/* <label className="font-bold mb-2">Suggest Two Reviewers:</label> */}
                            <label className="font-bold">
              Suggest Two Reviewers
            </label>

            <div className="space-y-3 mt-3">
              {reviewers.map((reviewer) => {
                const isSelected = suggestedReviewers.includes(reviewer._id);

                return (
                  <div
                    key={reviewer._id}
                    onClick={() => handleReviewerSelect(reviewer._id)}
                    className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer
          ${isSelected ? "bg-blue-50 border-blue-500" : "bg-white"}
        `}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                    />

                    <div>
                      <p className="font-medium">{reviewer.username}</p>
                      <p className="text-sm text-gray-600">{reviewer.email}</p>
                      <p className="text-sm text-gray-500">{reviewer.affiliation}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Suggested {suggestedReviewers.length} / 2 reviewers
            </p>


                        </div>
                        <label className="font-bold">Pages</label>
                        <input type="text" className="w-full border rounded-lg p-2 mb-4" placeholder="Pages" value={pages} onChange={(e) => setPages(e.target.value)} required />
                        <label className="font-bold">Upload Your Paper (<span className="font-medium">Refer to <a href="" className="text-blue-600 hover:underline">Authors Guidelines</a> for Paper's Format and other informations</span>)</label>
                        <FileUpload file={file} setFile={setFile} uploadedFileUrl={uploadedFileUrl} setUploadedFileUrl={setUploadedFileUrl} fileLoading={fileLoading} setFileLoading={setFileLoading} />
                        <button type="submit" className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Submit Paper</button>
                    </form>
                </div>
             
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const { req } = context;
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.token;

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
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/papers/papers`, {
                headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/reviewers`, {
                headers: { Authorization: `Bearer ${token}` },
            }),
        ]);

        return {
            props: {
                papers: papersRes.data,
                reviewers: reviewersRes.data,
                initialError: "",
            },
        };
    } catch (err) {
        return {
            props: {
                papers: [],
                reviewers: [],
                initialError: err.response?.data?.error || "Failed to fetch data. Please try again.",
            },
        };
    }
};


export default SubmitPaper;
