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
    if (!id || !image || !name || !categories || !price || !brand) {
      return res.status(400).json({ 
        message: "Validation Error", 
        errors: {
          image: !image ? "Image URL is required" : undefined,
          name: !name ? "Name is required" : undefined,
          categories: !categories ? "Categories are required" : undefined,
          price: !price ? "Price is required" : undefined,
          brand: !brand ? "Brand is required" : undefined
        }
      });
    }

  try {
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

    // Respond with the saved product
    res.status(201).json({
      message: `Product named "${savedProduct.name}" was successfully added.`,
      product: savedProduct,
    });
  } catch (error) {
    // Handle errors
    res
      .status(500)
      .json({ message: "Error adding product", error: error.message });
  }
});

module.exports = router;
