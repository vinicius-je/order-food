const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res) => {
    console.log('teste')
    const items = await MenuItem.find({});
    res.send(items)
}

const getMenuItemById = async (req, res) => {
    let id = req.params.id
    const item = await MenuItem.find({_id: id});
    res.send(item)
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
    
    const menuItemData = {
        url: req.body.url,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

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

const test = (req, res) => {
    console.log('test');
    res.send('test');
}


module.exports = {getMenuItems, getMenuItemById, createMenuItem, editMenuItem, deleteMenuItem, test}
