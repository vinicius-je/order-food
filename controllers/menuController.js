const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res) => {
    const items = await MenuItem.find({});
    res.send(items);
}

const getMenuItemById = async (req, res) => {
    let id = req.params.id
    const item = await MenuItem.find({_id: id});
    res.send(item);
}

const createMenuItem = async (req, res) => {
    const menuItem = new MenuItem({
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    try {
        let savedMenuItem = await menuItem.save();
        res.send(savedMenuItem);
    } catch (error) {
        res.status(404).send(error);
    }
}

const editMenuItem = async (req, res) => {
    let id = req.params.id;
    
    const menuItem = {
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    try {
        let item = await MenuItem.updateOne({_id: id}, menuItem);
        res.send(item);
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteMenuItem = async (req, res) => {
    let id = req.params.id;

    try {
        let itemDeleted = await MenuItem.findByIdAndDelete({_id: id});
        res.send(itemDeleted);
    } catch (error) {
        res.status(404).send(error);
    }
}

module.exports = {getMenuItems, getMenuItemById, createMenuItem, editMenuItem, deleteMenuItem}
