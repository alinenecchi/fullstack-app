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
  const { image, name, categories, price, brand } = req.body;

  try {
    // Validate request data
    if (!image || !name || !categories || !price || !brand) {
      return res.status(400).json({
        message: "Validation Error",
        errors: {
          image: !image ? "Image URL is required" : undefined,
          name: !name ? "Name is required" : undefined,
          categories: !categories ? "Categories are required" : undefined,
          price: !price ? "Price is required" : undefined,
          brand: !brand ? "Brand is required" : undefined,
        },
      });
    }

    // Create a new product instance
    const newProduct = new Product({
      image,
      name,
      categories,
      price,
      brand,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Respond with a success message and the saved product details
    res.status(201).json({
      message: `Product named "${savedProduct.name}" was successfully added.`,
      product: savedProduct,
    });
  } catch (error) {
    // Handle errors
    console.error("Error adding product:", error);

    if (error.name === "ValidationError") {
      res.status(400).json({
        message: "Validation Error",
        details: error.errors,
      });
    } else if (error.code && error.code === 11000) {
      res.status(409).json({
        message: "Duplicate Error",
        details: "A product with this ID already exists.",
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
        details: error.message,
      });
    }
  }
});

module.exports = router;
