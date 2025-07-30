const express = require('express');
const router = express.Router();
const controller = require('../controllers/facilitatorModuleController');

router.post('/allocate', controller.allocateModule);

module.exports = router;
