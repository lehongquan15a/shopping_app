const Category = require('../../model/category.model');

module.exports.index = async (req, res) => {
    const categories = await Category.find();
    res.json(categories)
}

module.exports.create = async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category)
}

module.exports.putUpdate = async (req, res) => {
    const {id} = req.params;

    const category = await Category.findByIdAndUpdate({_id:id},req.body);
    res.json(category)
}

module.exports.delete = async (req, res) => {
    const {id} = req.params;

    const category = await Category.findOneAndRemove({_id:id});
    res.json(category)
}