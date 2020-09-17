const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    category: String
});

const Product = mongoose.model("Product", productSchema, 'products')

module.exports = Product
