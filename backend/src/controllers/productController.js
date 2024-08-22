const Product = require('../models/product');
const { readCSV, transformData, insertDataToMongo } = require('../services/index.js');

exports.importProducts = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No files sent.' });
      }

      const data = await readCSV(req.file.path);
      const transformedData = transformData(data);
      await insertDataToMongo(transformedData);
  
      res.status(200).json({ message: 'Successfully imported products' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };