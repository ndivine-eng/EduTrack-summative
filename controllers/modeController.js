const { Mode } = require('../models');

exports.createMode = async (req, res) => {
  try {
    const newMode = await Mode.create(req.body);
    res.status(201).json(newMode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllModes = async (req, res) => {
  try {
    const modes = await Mode.findAll();
    res.json(modes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
