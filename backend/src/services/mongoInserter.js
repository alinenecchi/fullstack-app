const Product = require('../models/product.js');

const insertDataToMongo = async (data) => {
  try {
    await Product.insertMany(data);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error.message);
  }
};

module.exports = insertDataToMongo;
