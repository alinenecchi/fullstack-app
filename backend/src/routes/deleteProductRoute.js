const express = require("express");
const Product = require("../models/product"); // Importing the Product model

const router = express.Router();

// Route to delete a product by ID
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
