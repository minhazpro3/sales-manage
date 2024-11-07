const express = require("express");
const {
  addProduct,
  getProducts,
  deleteProduct,
  getProductsBySearch,
} = require("../productControllar/product");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getProducts);
router.route("/product/:id").delete(deleteProduct);
router.route("/search").get(getProductsBySearch);

module.exports = router;
