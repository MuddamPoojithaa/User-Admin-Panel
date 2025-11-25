require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// Routes
app.use("/api/projects", require("./routes/projectRoutes"));

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
