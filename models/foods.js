const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    avaliable: Boolean,
    description: String,
    image: String
})

module.exports = mongoose.model('Food', FoodSchema);

