require("dotenv").config();

const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());

// Use the product routes under the /api/products path
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
