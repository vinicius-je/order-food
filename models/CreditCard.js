const mongoose = require('mongoose');

const creditCardSchema = mongoose.Schema({
    card_number: {type: String}
})

module.exports = mongoose.model('creditCard', creditCardSchema)