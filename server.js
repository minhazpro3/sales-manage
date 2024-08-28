"use server";
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("routing is working");
});

//  database connections

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "sales-manage",
  })
  .then(() => {});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at on port ${PORT}`);
});
