// controllers/facilitatorController.js

const { Facilitator } = require('../models');

// CREATE a new facilitator
exports.createFacilitator = async (req, res) => {
  try {
    const facilitator = await Facilitator.create(req.body);
    res.status(201).json(facilitator);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET all facilitators
exports.getAllFacilitators = async (req, res) => {
  try {
    const facilitators = await Facilitator.findAll();
    res.status(200).json(facilitators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET a facilitator by ID
exports.getFacilitatorById = async (req, res) => {
  try {
    const facilitator = await Facilitator.findByPk(req.params.id);
    if (!facilitator) {
      return res.status(404).json({ error: 'Facilitator not found' });
    }
    res.status(200).json(facilitator);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a facilitator by ID
exports.updateFacilitator = async (req, res) => {
  try {
    const [updated] = await Facilitator.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedFacilitator = await Facilitator.findByPk(req.params.id);
      return res.status(200).json(updatedFacilitator);
    }

    res.status(404).json({ error: 'Facilitator not found' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a facilitator by ID
exports.deleteFacilitator = async (req, res) => {
  try {
    const deleted = await Facilitator.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      return res.status(204).send(); // No content
    }

    res.status(404).json({ error: 'Facilitator not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
