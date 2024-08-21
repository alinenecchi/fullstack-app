const Product = require('../models/product');
const fs = require('fs');
const csv = require('csv-parser'); // Certifique-se de ter essa biblioteca instalada

const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

const transformData = (data) => {
  // Adapte a transformação dos dados conforme necessário
  return data.map(item => ({
    name: item.name,
    price: parseFloat(item.price),
    // Adicione outros campos conforme necessário
  }));
};

const insertDataToMongo = async (data) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(data);
  } catch (error) {
    throw new Error(`Failed to insert data to MongoDB: ${error.message}`);
  }
};

module.exports = {
  readCSV,
  transformData,
  insertDataToMongo,
};