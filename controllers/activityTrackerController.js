// controllers/activityTrackerController.js
const { ActivityTracker } = require('../models');
const taskQueue = require('../queues/taskQueue.js');  // import your queue

// CREATE a new activity tracker log
exports.createActivityLog = async (req, res) => {
  try {
    const log = await ActivityTracker.create(req.body);

    // Add a notification task to Redis
    await taskQueue.add({
      type: 'log_submitted',
      facilitatorId: req.body.facilitatorId,
      allocationId: req.body.allocationId,
      message: `Facilitator ${req.body.facilitatorId} submitted log for allocation ${req.body.allocationId}`
    });

    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE an existing activity log
exports.updateActivityLog = async (req, res) => {
  try {
    const log = await ActivityTracker.findByPk(req.params.id);
    if (!log) {
      return res.status(404).json({ error: 'Log not found' });
    }

    await log.update(req.body);

    // Add notification when log is updated
    await taskQueue.add({
      type: 'log_updated',
      facilitatorId: req.body.facilitatorId,
      allocationId: log.allocationId,
      message: `Facilitator ${req.body.facilitatorId} updated log ${log.id}`
    });

    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
