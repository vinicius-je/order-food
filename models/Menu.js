const mongoose = require('mongoose')

const menuItemSchema = mongoose.Schema({
    url: {type: String, require: true},
    name: {type :String, require: true, minlength: 3, maxlenght: 30},
    description: {type: String, require: true, minlength: 3, maxlenght: 100},
    price: {type: Number, require: true, min: 0, max: 500},
    category: {type: Number, require: true, min: 1, max: 10},
    time: {type: Number, require: true, min: 1, max: 55},
    portion: {type: Number, require, min: 1, max: 6}
})

module.exports = mongoose.model('menu_items', menuItemSchema);