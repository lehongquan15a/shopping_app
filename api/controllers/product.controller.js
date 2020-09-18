const Product = require('../../model/product.model');

module.exports.index = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

module.exports.create = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product)
}

module.exports.putUpdate = async (req, res) => {
    const {id} = req.params;

    const product = await Product.findByIdAndUpdate({_id:id},req.body);
    res.json(product)
}

module.exports.delete = async (req, res) => {
    const {id} = req.params;

    const product = await Product.findOneAndRemove({_id:id});
    res.json(product)
}