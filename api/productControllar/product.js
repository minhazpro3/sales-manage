const mongoose = require("mongoose");
const Product = require("../schemas/product.schemas");

exports.addProduct = async (req, res, next) => {
  try {
    const productData = new Product(req.body);
    const savedProduct = await productData.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    next();
  }
};
