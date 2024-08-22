require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const csvParser = require("csv-parser");
const connectDB = require("../config/db");
const Product = require("../models/product");

const importProducts = async () => {
  try {
    // Connect to database
    await connectDB();

    const filePath = path.join(__dirname, "../uploads/products.csv");
    const products = [];

    fs.createReadStream(filePath)
      .pipe(csvParser({ separator: ";" }))
      .on("data", (row) => {
        products.push({
          id: Number(row.id),
          image: row.image,
          name: row.name,
          categories: row.categories,
          price: parseFloat(row.price),
          brand: row.brand,
        });
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");
        try {
          // Use the `insertMany` function to save all products at once
          await Product.insertMany(products);
          console.log("All products saved successfully");
        } catch (error) {
          console.error("Error saving products:", error.message);
        } finally {
          mongoose.connection.close();
        }
      });
  } catch (error) {
    console.error("Error importing products:", error.message);
    mongoose.connection.close();
  }
};

importProducts();
