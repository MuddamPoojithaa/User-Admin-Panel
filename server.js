const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

connectDB();

// Routes
app.use("/api/projects", require("./routes/adminRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));
