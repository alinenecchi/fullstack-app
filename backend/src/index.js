const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // Import the route

const app = express();

connectDB();

app.use(express.json());

// Use the product routes under the /api/products path
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});