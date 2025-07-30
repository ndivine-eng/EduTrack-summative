const express = require('express');
const router = express.Router();
const modeController = require('../controllers/modeController');

router.post('/', modeController.createMode);
router.get('/', modeController.getAllModes);

module.exports = router;
