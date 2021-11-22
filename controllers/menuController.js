const MenuItem = require('../models/MenuItem');

const createFood = async (req, res) => {
    const menuItem = new MenuItem({
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    try {
        let savedMenuItem = await menuItem.save()
        res.send(savedMenuItem)
    } catch (error) {
        res.status(404).send(error)
    }
}

const sendMenuItems = async (req, res) => {
    const items = await MenuItem.find({})
    res.send(items)
}

const editMenuItem = async (req, res) => {
    const menuItem = {
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    let id = req.params.id

    try {
        await MenuItem.updateOne({_id: id}, menuItem)
        res.send('ok')
    } catch (error) {
        res.status(404).send(error)
    }
}

const deleteMenuItem = async (req, res) => {
    let id = req.params.id

    try {
        await MenuItem.findByIdAndDelete({_id: id})
        res.send('ok')
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {createFood, sendMenuItems, editMenuItem, deleteMenuItem}
