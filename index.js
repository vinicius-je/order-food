const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(console.log('mongo connected'))
    .catch(console.log)

const Food = require('./models/Food');

const PORT = 4000;

const createFood = async (req, res) => {
    const food = new Food({
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    try {
        let savedFood = await food.save()
        res.send(savedFood)
    } catch (error) {
        res.status(404).send(error)
    }
}

app.post('/add', express.urlencoded({extended: false}), (res) => {
    createFood(req, res)
})

const sendMenuItens = async (res) => {
    const items = await Food.find()
    console.log(items)
    res.send(items)
}

app.get('/menuItems', express.json(), (req, res) => {
    sendMenuItens(res);
})

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})