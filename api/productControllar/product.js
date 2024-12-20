const Product = require("../schemas/product.schemas");

// save a new product
exports.addProduct = async (req, res, next) => {
  try {
    const productData = new Product(req.body);
    const savedProduct = await productData.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    next();
  }
};

// get all products
exports.getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    const allProducts = await Product.find({}).skip(skip).limit(limit);
    // Optionally, get the total number of products to return in response for front-end pagination
    const totalProducts = await Product.countDocuments({});
    const totalPages = Math.ceil(totalProducts / limit);
    res.status(200).send({
      products: allProducts,
      totalProducts,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    next();
  }
};

// delete a product
exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await Product.findByIdAndDelete(id);

    // Check if the product was found and deleted
    if (!response) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product deleted successfully", data: response });
  } catch (error) {
    next();
  }
};

// get product by search
exports.getProductsBySearch = async (req, res, next) => {
  const searchTeam = req.query.name;

  try {
    const products = await Product.find({
      name: { $regex: searchTeam, $options: "i" },
    });
    res.status(200).send(products);
  } catch (error) {
    next();
  }
};

// update product
exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedProduct);
    if (!updatedProduct) {
      res.status(500).send("Product not found!");
    }
  } catch (error) {
    next();
  }
};

// bulk-delete products

exports.bulkDeleteProducts = async (req, res, next) => {
  try {
    const id = req.body.id.selectedProducts;
    if (id.length > 0) {
      const response = await Product.deleteMany({ _id: { $in: id } });
      res.status(200).send(response);
    }
  } catch (error) {
    next();
  }
};
