const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../config/cloudinary");
const { listProjects, addProject, deleteProject } = require("../controllers/projectController");

const upload = multer({ storage });

router.get("/list", listProjects);
router.post("/add", upload.single("image"), addProject);

router.delete("/delete/:id", deleteProject);

module.exports = router;
