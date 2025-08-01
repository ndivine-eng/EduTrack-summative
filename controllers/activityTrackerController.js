// controllers/activityTrackerController.js

const { ActivityTracker, Allocation } = require('../models');
const taskQueue = require('../queues/taskQueue.js');  // Redis queue

// CREATE a new activity tracker log
exports.createActivityLog = async (req, res) => {
  try {
    const { allocationId, weekNumber } = req.body;

    // Ensure allocation exists
    const allocation = await Allocation.findByPk(allocationId);
    if (!allocation) {
      return res.status(400).json({ error: 'Invalid allocation ID' });
    }

    const facilitatorId = allocation.facilitatorId;

    const log = await ActivityTracker.create(req.body);

    // Queue a notification task
    await taskQueue.add({
      type: 'log_submitted',
      facilitatorId,
      allocationId,
      message: `Facilitator ${facilitatorId} submitted log for allocation ${allocationId} (Week ${weekNumber})`
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

    // Retrieve facilitatorId from Allocation
    const allocation = await Allocation.findByPk(log.allocationId);
    const facilitatorId = allocation ? allocation.facilitatorId : null;

    // Queue update notification
    await taskQueue.add({
      type: 'log_updated',
      facilitatorId,
      allocationId: log.allocationId,
      message: `Facilitator ${facilitatorId} updated log ${log.id}`
    });

    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all activity logs (for managers)
exports.getAllActivityLogs = async (req, res) => {
  try {
    const logs = await ActivityTracker.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET filtered logs (e.g., by facilitatorId, weekNumber, allocationId, etc.)
exports.getFilteredLogs = async (req, res) => {
  try {
    const filters = req.query; // Use query params like ?facilitatorId=1&weekNumber=2

    // Optional: include allocation relation if needed
    const logs = await ActivityTracker.findAll({ where: filters });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE a log (optional, for managers/admins)
exports.deleteActivityLog = async (req, res) => {
  try {
    const log = await ActivityTracker.findByPk(req.params.id);
    if (!log) {
      return res.status(404).json({ error: 'Log not found' });
    }

    await log.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
