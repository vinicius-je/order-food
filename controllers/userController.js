const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const login = async (req, res) => {
    const {email, password} = req.body

    const userSelected = await User.findOne({email: email})

    // check if the user exist
    if(!userSelected) return res.status(400).send('Email or Password incorret')

    // check if the password match
    const checkPassword = bcrypt.compareSync(password, userSelected.password)
    
    if(!checkPassword) return res.status(400).send('Email or Password incorret')
    // create user token 
    const token = jwt.sign({id: userSelected._id, admin: userSelected.admin}, process.env.TOKEN_SECRET)
    // send user token and admin status
    res.send({token: token})
}

const register = async (req, res) => {
    const {email, password} = req.body
    const userExist = await User.findOne({email: email})

    // check if user exist
    if(userExist) return res.status(400).send('User already exist')
    
    const newUser = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password)
    })

    try {
        const user = await newUser.save()
        const userSelected = await User.findOne({email: user.email})
        const token = jwt.sign({id: userSelected._id, admin: userSelected.admin}, process.env.TOKEN_SECRET)
        res.send({token: token, admin: userSelected.admin})
    } catch (error) {
        res.send(error)
    }
}

module.exports = {login, register}
