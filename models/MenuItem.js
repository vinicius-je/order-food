const mongoose = require('mongoose')

const menuItemSchema = mongoose.Schema({
    url: {type: String, require: true},
    name: {type :String, require: true, minlength: 3, maxlenght: 30},
    description: {type: String, require: true, minlength: 3, maxlenght: 100},
    price: {type: Number, require: true, min: 0, max: 500}
})

module.exports = mongoose.model('menuItem', menuItemSchema);