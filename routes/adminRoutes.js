const router = require("express").Router();
const controller = require("../controllers/adminController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), controller.addProject);
router.get("/list", controller.getProjects);
router.put("/update/:id", controller.updateProject);
router.delete("/delete/:id", controller.deleteProject);

module.exports = router;
