const express = require("express");
const Product = require("../models/product");

const router = express.Router();

// Route to get all products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
});

// Route to get a single product by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params; // Get the ID from the request parameters

  try {
    // Find the product by ID
    const product = await Product.findOne({ id });

    if (product) {
      // If the product is found, return it as a JSON response
      res.json(product);
    } else {
      // If the product is not found, return a 404 error
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    // Handle any errors that occur
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { id, image, name, categories, price, brand } = req.body;

  try {
    // Check if a product with the same ID already exists
    const existingProduct = await Product.findOne({ id });
    if (existingProduct) {
      return res.status(400).json({
        message: `Product with ID ${id} already exists.`,
      });
    }

    // Create a new product instance
    const newProduct = new Product({
      id,
      image,
      name,
      categories,
      price,
      brand,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();
    // Respond with the saved product and a success message
    res.status(201).json({
      message: `Product named "${savedProduct.name}" was successfully added.`,
      product: savedProduct,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      message: "Error adding product",
      error: error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { image, name, categories, price, brand } = req.body;

  try {
    // Converter ID para ObjectId
    const objectId = mongoose.Types.ObjectId(id);

    const updatedProduct = await Product.findByIdAndUpdate(
      objectId,
      { image, name, categories, price, brand },
      { new: true, runValidators: true }
    );

    if (updatedProduct) {
      res.json({
        message: `Product named "${updatedProduct.name}" was successfully updated.`,
        product: updatedProduct,
      });
    } else {
      res.status(404).json({ message: `Product with ID ${id} not found.` });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error updating product',
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the product by ID
    const deletedProduct = await Product.findOneAndDelete({ id });

    if (deletedProduct) {
      // Respond with success message and deleted product
      res.json({ message: "Product deleted successfully", deletedProduct });
    } else {
      // Respond with error if
      // Respond with an error if the product is not found
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
});

module.exports = router;
