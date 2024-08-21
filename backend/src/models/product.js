const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  categories: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
