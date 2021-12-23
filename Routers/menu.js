const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');
const securityController = require('../controllers/securityController');
// middleware
router.use(express.json());
router.use(securityController.userAuth);

router.get('/items', menuController.getMenuItems);

router.get('/:id', menuController.getMenuItemById);

router.use(securityController.userAdmin);

router.post('/add', menuController.createMenuItem);

router.put('/edit/:id', menuController.editMenuItem);

router.delete('/delete/:id', menuController.deleteMenuItem);

module.exports = router