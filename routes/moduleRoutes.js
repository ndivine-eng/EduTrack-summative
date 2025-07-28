// routes/moduleRoutes.js
const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

router.post('/', moduleController.createModule);
router.get('/', moduleController.getAllModules);
router.put('/:id', moduleController.updateModule);     // Update
router.delete('/:id', moduleController.deleteModule);  // Delete

module.exports = router;
