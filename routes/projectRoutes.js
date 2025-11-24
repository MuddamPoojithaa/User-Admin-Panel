const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// CREATE
router.post("/add", upload.single("image"), createProject);

// GET ALL
router.get("/", getProjects);

// UPDATE
router.put("/update/:id", upload.single("image"), updateProject);

// DELETE
router.delete("/delete/:id", deleteProject);

module.exports = router;
