const CreditCard = require('../models/CreditCard');

const validade_payment = async (req, res) => {
    const user_card_number = req.body.card_number;

    const card = await CreditCard.findOne({card_number: user_card_number});

    if(!card){ return res.status(400).send('payment not approved') }

    res.sendStatus(200);
}

module.exports = {validade_payment};