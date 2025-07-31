const express = require('express');
const router = express.Router();
const controller = require('../controllers/activityTrackerController');

// CREATE a log
router.post('/', controller.createActivityLog);

// UPDATE a log
router.put('/:id', controller.updateActivityLog);

// (optional) GET all logs
router.get('/', async (req, res) => {
  const { ActivityTracker, Allocation } = require('../models');
  const logs = await ActivityTracker.findAll({ include: ['allocation'] });
  res.json(logs);
});

module.exports = router;
