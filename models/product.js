const mongoose = require('mongoose');

const product = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    stock: Number,
    type: String,
    imageProduct: Array,
    price: Number
})

module.exports = mongoose.model('products', product);

