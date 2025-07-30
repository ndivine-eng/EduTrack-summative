// controllers/managerController.js

const { Manager } = require('../models');

// Create
exports.createManager = async (req, res) => {
  try {
    const manager = await Manager.create(req.body);
    res.status(201).json(manager);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all
exports.getAllManagers = async (req, res) => {
  try {
    const managers = await Manager.findAll();
    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read one
exports.getManagerById = async (req, res) => {
  try {
    const manager = await Manager.findByPk(req.params.id);
    if (!manager) {
      return res.status(404).json({ error: 'Manager not found' });
    }
    res.status(200).json(manager);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
exports.updateManager = async (req, res) => {
  try {
    const [updated] = await Manager.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Manager not found' });
    res.status(200).json({ message: 'Manager updated' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
exports.deleteManager = async (req, res) => {
  try {
    const deleted = await Manager.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Manager not found' });
    res.status(200).json({ message: 'Manager deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
