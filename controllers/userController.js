const User = require('../models/User');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    const {email, password} = req.body

    const userSelected = await User.findOne({email: email})

    // check if the user exist
    if(!userSelected) return res.status(400).send('Email or Password incorret')

    // check if the password match
    const checkPassword = bcrypt.compareSync(password, userSelected.password)
    
    if(!checkPassword) return res.status(400).send('Email or Password incorret')

    res.send(userSelected)
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
        let user = await newUser.save()
        res.send('ok')
    } catch (error) {
        res.send(error)
    }
}

module.exports = {login, register}
