const Project = require("../models/Project");

// Add Project
exports.addProject = async (req, res) => {
  try {
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename
    });

    await project.save();
    res.json({ message: "Project added!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// View Projects
exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// Update Project
exports.updateProject = async (req, res) => {
  await Project.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated!" });
};

// Delete Project
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted!" });
};
