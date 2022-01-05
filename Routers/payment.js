const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentController');

router.use(express.json());
router.post('/', paymentController.validade_payment);

module.exports = router;