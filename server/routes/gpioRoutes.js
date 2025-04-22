const express = require('express');
const router = express.Router();
const { turnOnPin } = require('../controllers/gpioController');

router.post('/on', turnOnPin);
router.post('/off', turnOffPin);

module.exports = router;
