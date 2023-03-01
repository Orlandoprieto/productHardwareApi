const express = require('express');
const allProducts = require('../controllers/allProducts')
const createProduct = require('../controllers/crateProduct');
const productForId = require('../controllers/productForId');


const api = express.Router();


api.get('/products', allProducts);

api.post('/products', createProduct);

api.get('/products/:id', productForId);

module.exports = api;