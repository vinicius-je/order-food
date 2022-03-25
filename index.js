const express = require('express');
const app = express();
const path = require('path');
const menuRouter = require('./Routers/menu');
const userRouter = require('./Routers/user');
const paymentRouter = require('./Routers/payment');

require('dotenv').config();

// connection to mongo database
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_LOCAL_URL)
    .then(console.log('mongo connected'))
    .catch(console.log)

const PORT = process.env.PORT || 3001 

app.use('/user', userRouter)
app.use('/menu', menuRouter)
app.use('/payment', paymentRouter)

if(process.env.NODE_ENV != 'dev'){
    // app.use('*', (req, res, next) => {
    //     if(req.headers['x-forwarded-proto'] == 'https') next()
    //     else res.redirect('https://' + req.headers.host + req.originalUrl)
    // })
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')))
}

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})