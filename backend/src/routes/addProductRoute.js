const express = require('express');
const Product = require('../models/product'); // Importing the Product model

const router = express.Router();

// Route to add a new product
router.post('/', async (req, res) => {
  const { id, image, name, categories, price, brand } = req.body;

  try {
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
    
    // Respond with the saved product
    res.status(201).json(savedProduct);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
});

module.exports = router;
