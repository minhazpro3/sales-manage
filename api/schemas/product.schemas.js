const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    max_length: [100, "Product name cannot exceed 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    max_length: [1000, "Description cannot exceed 1000 characters"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
    enum: {
      values: ["electronics", "clothing", "furniture", "toys", "food", "books"],
      message: "{$VALUE} is not a valid category",
    },
  },
  stock: {
    type: Number,
    required: [true, "Stock quantity is required"],
    min: [0, "Stock cannot be negative"],
    default: 0,
  },
  image: {
    type: String,
    required: [true, "Image RUL required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price cannot be negative"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = product;
