const schemaProduct = require('../models/product')

const allProducts = async (req, res) => {
    const products = await schemaProduct.find( {} )
    res.status(200).json(products); 
};

module.exports = allProducts;
