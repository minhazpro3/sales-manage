const express = require("express");
const {
  addProduct,
  getProducts,
  deleteProduct,
} = require("../productControllar/product");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getProducts);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
