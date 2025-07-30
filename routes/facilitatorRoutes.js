// routes/facilitatorRoutes.js

const express = require('express');
const router = express.Router();
const facilitatorController = require('../controllers/facilitatorController');

// CREATE a new facilitator
router.post('/', facilitatorController.createFacilitator);

// READ all facilitators
router.get('/', facilitatorController.getAllFacilitators);

// READ one facilitator by ID
router.get('/:id', facilitatorController.getFacilitatorById);

// UPDATE a facilitator by ID
router.put('/:id', facilitatorController.updateFacilitator);

// DELETE a facilitator by ID
router.delete('/:id', facilitatorController.deleteFacilitator);

module.exports = router;
