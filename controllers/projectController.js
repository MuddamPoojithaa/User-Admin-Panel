const Project = require("../models/Project");

exports.listProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.addProject = async (req, res) => {
  try {
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      image: req.file ? req.file.path : null // this should work with multer-storage-cloudinary v5+
    });
    await project.save();
    res.json({ success: true, project });
  } catch (err) {
    console.error("Add Project Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
