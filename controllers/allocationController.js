const { Allocation } = require('../models');

exports.createAllocation = async (req, res) => {
  try {
    const allocation = await Allocation.create(req.body);
    res.status(201).json(allocation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllAllocations = async (req, res) => {
  try {
    const allocations = await Allocation.findAll();
    res.status(200).json(allocations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllocationById = async (req, res) => {
  try {
    const allocation = await Allocation.findByPk(req.params.id);
    if (!allocation) {
      return res.status(404).json({ error: 'Allocation not found' });
    }
    res.status(200).json(allocation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};