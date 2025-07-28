// moduleController.js
const { Module } = require('../models');

// CREATE a module
exports.createModule = async (req, res) => {
  try {
    const module = await Module.create(req.body);
    res.status(201).json(module);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ all modules
exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.findAll();
    res.status(200).json(modules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a module
exports.updateModule = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Module.update(req.body, { where: { id } });

    if (updated) {
      const updatedModule = await Module.findByPk(id);
      res.status(200).json(updatedModule);
    } else {
      res.status(404).json({ error: 'Module not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a module
exports.deleteModule = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Module.destroy({ where: { id } });

    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ error: 'Module not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const moduleQueue = require('../queues/moduleQueue');

exports.queueDeleteModule = async (req, res) => {
  try {
    const { id } = req.params;
    await moduleQueue.add('deleteModule', { id });
    res.status(202).json({ message: `Delete job queued for module ID ${id}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
