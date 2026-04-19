const PaperModel = require("../models/PaperModel");

// Submit an paper
module.exports.submitPaper = async (req, res) => {
  const { paperTitle, abstract, indexTerms, references, pages, doi, publicationDate, journalId, journalName  ,pdf, suggestedReviewers , coauthors ,type } = req.body;
  const { username, email , mobno, affiliation } = req.user; 
 
  console.log("JID",journalId)
  console.log("JName",journalName)
  if (!username || !email) {
    return res.status(400).json({ error: "User information is missing" });
  }

  if (!journalId || !journalName) {
    return res.status(400).json({ error: "Journal information is missing" });
  }

  try {
    const newPaper = new PaperModel({
      paperId:  journalId + Math.floor(Math.random() * 1000),
      paperTitle,
      abstract,
      author: { username, email, affiliation , mobno },
      indexTerms:indexTerms ? indexTerms.split(",").map((t) => t.trim()) : [],
      references,
      pages,
      doi,
      publicationDate,
      jshorttitle: journalId,  // Reference to the Journal model
      journalName,         // Journal name stored as string
      pdf,
      suggestedreviewers: suggestedReviewers,
      coauthors,    
      type,
      
     

    });

    await newPaper.save();
    res.status(201).json({ message: "paper submitted successfully", paper: newPaper });
  } catch (err) {
    console.error("Error submitting paper:", err);
    res.status(500).json({ error: "Failed to submit paper" });
  }
};


// Fetch paper submitted by the logged-in author
// Fetch paper submitted by the logged-in author
module.exports.getUserPapers = async (req, res) => {
  const userEmail = req.user?.email;
  if (!userEmail) {
    return res.status(400).json({ error: "User email is missing" });
  }

  try {
    const papers = await PaperModel.find({ "author.email": userEmail });

    if (papers.length === 0) {
      return res.status(200).json({ message: "No papers found" });
    }

    // Return papers with author view (hiding final decision)
    const authorPapers = papers.map(paper => paper.getAuthorView());
    res.status(200).json(authorPapers);
  } catch (err) {
    console.error("Error fetching papers:", err);
    res.status(500).json({ error: "Failed to fetch papers" });
  }
};

// Assign reviewers to an papers
module.exports.assignReviewers = async (req, res) => {
  try {
    const { paperId, reviewers } = req.body;
    // reviewers = ["r1", "r2"] (usernames or ids – be consistent)

    console.log("Assigning reviewers:", paperId, reviewers);

    const paper = await PaperModel.findOne({ paperId });

    if (!paper) {
      return res.status(404).json({ error: "Paper not found" });
    }

    // ✅ convert reviewers into objects with submitted flag
    paper.reviewers = reviewers.map((r) => ({
      reviewer: r.trim(),
      submitted: false,
      submittedAt: null,
    }));

    paper.status = "under_review";

    await paper.save();

    res.json({
      message: "Reviewers assigned successfully",
      paper,
    });
  } catch (error) {
    console.error("Assign reviewers error:", error);
    res.status(400).json({ error: error.message });
  }
};



// Submit a review (Only assigned reviewers can review)
module.exports.submitReview = async (req, res) => {
  try {
    const {
      paperId,
      decision,
      generalComments,
      strengths,
      weaknesses,
      suggestions,
      reviewRatings,
    } = req.body;

    const reviewerUsername = req.user.username;

    const paper = await PaperModel.findOne({ paperId });
    if (!paper) {
      return res.status(404).json({ error: "Paper not found" });
    }

    // 🔐 Validate reviewer assignment
    const reviewerEntry = paper.reviewers.find(
      (r) => r.reviewer === reviewerUsername
    );

    if (!reviewerEntry) {
      return res.status(403).json({
        error: "You are not assigned as a reviewer for this paper",
      });
    }

    if (reviewerEntry.submitted) {
      return res.status(400).json({
        error: "You have already submitted your review",
      });
    }

    // 1️⃣ Save review
    paper.reviews.push({
      reviewer: reviewerUsername,
      decision,
      generalComments,
      strengths,
      weaknesses,
      suggestions,
      reviewRatings,
      submittedAt: new Date(),
    });

    // 2️⃣ Mark submitted
    reviewerEntry.submitted = true;
   

    await paper.save();

    return res.status(200).json({
      message: "Review submitted successfully!",
    });
  } catch (err) {
    console.error("Error during review submission:", err);
    res.status(500).json({ error: "Error submitting review" });
  }
};





// Fetch all paper (for editors)
module.exports.getAllPapers = async (req, res) => {
  try {
    const papers = await PaperModel.find();

    if (papers.length === 0) {
      return res.status(200).json({ message: "No paper found" });
    }

    res.status(200).json(papers);
  } catch (err) {
    console.error("Error fetching papers:", err);
    res.status(500).json({ error: "Failed to fetch papers" });
  }
};

// Fetch paper assigned to a specific reviewer
module.exports.getReviewerPapers = async (req, res) => {
  const reviewerEmail = req.user?.email;

  if (!reviewerEmail) {
      return res.status(400).json({ error: "Reviewer email is missing" });
  }

  try {
      // Fetch paper where the logged-in reviewer is assigned
      const papers = await PaperModel.find({ reviewers: reviewerEmail });

      if (papers.length === 0) {
          return res.status(200).json({ message: "No assigned paper found" });
      }

      res.status(200).json(papers);
  } catch (err) {
      console.error("Error fetching reviewer paper:", err);
      res.status(500).json({ error: "Failed to fetch reviewer paper" });
  }
};

exports.setFinalDecision = async (req, res) => {
  try {
    const { paperId, finalDecision } = req.body;
    console.log("paperId", paperId)

    // Validate finalDecision to ensure it is one of the allowed values
    if (!['accepted', 'rejected', 'revision'].includes(finalDecision)) {
      return res.status(400).json({ error: "Invalid final decision" });
    }

    // Find the paper by ID
    const paper = await PaperModel.findOne({paperId});
    if (!paper) {
      return res.status(404).json({ error: "paper not found" });
    }

    // Set the finalDecision field in the paper
    paper.finalDecision = finalDecision;  // Only the editor can update this field
    paper.status = finalDecision;  // Optionally, update the status based on the final decision

    await paper.save();

    res.json({ message: "Final decision set successfully", paper });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


