const Category = require('../../model/category.model');

module.exports.index = async (req, res) => {
    const categories = await Category.find();
    res.json(categories)
}

module.exports.create = async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category)
}