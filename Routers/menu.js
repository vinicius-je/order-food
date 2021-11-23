
const express = require('express');
const router = express.Router();

const foodControllers = require('../controllers/menuController');

router.get('/items', express.json(), foodControllers.sendMenuItems);

router.post('/add', express.json(), foodControllers.createFood);

router.put('/edit/:id', express.urlencoded({extended: true}), foodControllers.editMenuItem);

router.delete('/delete/:id', express.urlencoded({extended: true}), foodControllers.deleteMenuItem);

module.exports = router