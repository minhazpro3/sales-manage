const express = require("express");
const { addProduct, getProduct } = require("../productControllar/product");
const router = express.Router();

router.route("/product").post(addProduct);

module.exports = router;
