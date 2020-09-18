const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email:String,
    gender:String,
    ip_address:String,
    age:Number
});

const User = mongoose.model("User", userSchema, 'users')

module.exports = User
