const express = require("express");
const {
  addProduct,
  getProducts,
  deleteProduct,
  getProductsBySearch,
  updateProduct,
  bulkDeleteProducts,
} = require("../productControllar/product");

const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getProducts);
router.route("/product/:id").delete(deleteProduct);
router.route("/search").get(getProductsBySearch);
router.route("/product/:id").put(updateProduct);
router.route("/product/bulk-delete").delete(bulkDeleteProducts);

module.exports = router;
