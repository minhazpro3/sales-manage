const express = require("express");
const { addProduct, getProducts } = require("../productControllar/product");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getProducts);

module.exports = router;
