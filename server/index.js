require('dotenv').config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes");
const { connectDB } = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

app.get("/", (req, res) => {
  res.send("Mini ERP Backend Running");
});

// Routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
