const Product = require('../../model/product.model');

module.exports.index = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

module.exports.create = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product)
}

// module.exports.delete = async (req, res) => {

//     const product = await Product.delete({id:req.params.id});
//     res.json(product)
// }