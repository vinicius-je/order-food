const express = require('express');
const router = express.Router();

const menuControllers = require('../controllers/menuController');

router.use(express.json())

router.get('/items', menuControllers.getMenuItems);

router.get('/:id', menuControllers.getMenuItemById)

router.post('/add', menuControllers.createMenuItem);

router.put('/edit/:id', menuControllers.editMenuItem);

router.delete('/delete/:id', menuControllers.deleteMenuItem);

module.exports = router