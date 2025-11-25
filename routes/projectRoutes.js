const express = require("express");
const router = express.Router();
const multer = require("multer");
const Project = require("../models/Project");

// Image Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// READ ALL PROJECTS
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// CREATE PROJECT
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      image: req.file?.filename ?? ""
    });

    await project.save();
    res.json({ message: "Project added", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
