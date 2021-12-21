const jwt = require('jsonwebtoken')
require('dotenv').config

// check if user is authenticated
const userAuth = (req, res, next) => {
    const userToken = req.header('authorization-token');

    try {
        const token = jwt.verify(userToken, process.env.TOKEN_SECRET);
        req.user = token;
        console.log(token);
        next()
    } catch (error) {
        res.status(401).send('acess denied');
    }
}

const userAdmin = (req, res, next) => {
    const userAdmin = req.user.admin;

    userAdmin ? next() : res.status(401).send('acess denied');
}

module.exports = {userAuth, userAdmin}