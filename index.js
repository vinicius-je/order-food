const express = require('express');
const app = express();
const path = require('path');
const menuRouter = require('./Routers/menu');
const userRouter = require('./Routers/user')

require('dotenv').config();

// connection to mongo database
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(console.log('mongo connected'))
    .catch(console.log)

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'), (error) => {
        if(error) {
            res.status(500).send(error)
        }
    })
})

app.use('/user', userRouter)
app.use('/menu', menuRouter)

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})