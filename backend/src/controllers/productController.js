const Product = require('../models/product');
const { readCSV, transformData, insertDataToMongo } = require('../services/index.js');

exports.importProducts = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
      }
  
      // Processar o arquivo CSV
      const data = await readCSV(req.file.path);
      const transformedData = transformData(data);
      await insertDataToMongo(transformedData);
  
      res.status(200).json({ message: 'Produtos importados com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };