const User = require('../../model/user.model');

module.exports.index = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

module.exports.create = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user)
}

module.exports.putUpdate = async (req, res) => {
    const {id} = req.params;

    const user = await User.findByIdAndUpdate({_id:id},req.body);
    res.json(user)
}

module.exports.delete = async (req, res) => {
    const {id} = req.params;

    const user = await User.findOneAndRemove({_id:id});
    res.json(user)
}