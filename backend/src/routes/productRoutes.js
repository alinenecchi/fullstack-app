const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Route to get all products
router.get('/allProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

module.exports = router;

