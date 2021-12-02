const express = require('express');
const router = express.Router();

const menuControllers = require('../controllers/menuController');

router.get('/items', express.json(), menuControllers.getMenuItems);

router.get('/:id', express.json(), menuControllers.getMenuItemById)

router.post('/add', express.json(), menuControllers.createMenuItem);

router.put('/edit/:id', express.json(), menuControllers.editMenuItem);

router.delete('/delete/:id', menuControllers.deleteMenuItem);

module.exports = router