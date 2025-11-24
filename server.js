const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

// Make uploads folder public
app.use("/uploads", express.static("uploads"));

app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => res.send("Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
