const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
});

const Category = mongoose.model("Category", categorySchema, 'categories')

module.exports = Category