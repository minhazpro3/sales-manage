"use server";
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URI, {
    dbName: "sales-manage",
  })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("mongoose error is");
  });

app.get("/gets", (req, res) => {
  res.send("your bookings is heressssssssssssssss");
});

// app.get("at", (req, res) => {
//   res.send("All products in this code here buddy");
// });

//  database connections

app.listen(5000, () => {
  console.log(`Server running on ${PORT}`);
});
