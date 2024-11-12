const express = require("express");
const { registerUser } = require("../productControllar/user");
const router = express.Router();

router.route("/user/resister").post(registerUser);

module.exports = router;
