const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    maxlength: [1000, "Description cannot exceed 1000 characters"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = product;
