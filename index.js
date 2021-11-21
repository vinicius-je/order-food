const express = require('express');
const app = express();
const menuRouter = require('./Routers/menu')

require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(console.log('mongo connected'))
    .catch(console.log)

const PORT = 4000;

app.use('/menu', menuRouter)

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})