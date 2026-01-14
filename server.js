const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

/* 1️⃣ Serve static assets */
app.use(express.static(path.join(__dirname, "public")));

/* 2️⃣ Home route */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AgriBio server running on port ${PORT}`);
});
