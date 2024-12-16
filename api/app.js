"use server";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const useRoute = require("../api/routers/product.route");
const usersRoute = require("../api/routers/user.route");

// initialize environment variable
dotenv.config();

// initialize express & middleware
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", useRoute);
app.use("/api/v1", usersRoute);

app.get("/", (req, res) => {
  res.send("  is working");
});

// default ERROR handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: "It's a global ERROR" });
}

app.use(errorHandler);

module.exports = app;
