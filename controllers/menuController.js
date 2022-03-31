const MenuItem = require('../models/Menu');

const getMenuItems = async (req, res) => {
    const items = await MenuItem.find({});
    res.send(items)
}

const getMenuItemById = async (req, res) => {
    let id = req.params.id
    const item = await MenuItem.find({_id: id});
    res.send(item)
}

const createMenuItem = async (req, res) => {
    const {url, name, description, price, time, portion} = req.body;
    const menuItem = new MenuItem({url, name, description, price, time, portion});
    
    try {
        let savedMenuItem = await menuItem.save();
        res.send(savedMenuItem);
    } catch (error) {
        res.status(404).send(error);
    }
}

const editMenuItem = async (req, res) => {
    const id = req.params.id;
    const {url, name, description, price, time, portion} = req.body;
    const menuItemData = {url, name, description, price, time, portion}

    try {
        let item = await MenuItem.updateOne({_id: id}, menuItemData);
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
