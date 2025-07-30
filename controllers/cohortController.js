const { Cohort } = require('../models');

exports.createCohort = async (req, res) => {
  try {
    const newCohort = await Cohort.create(req.body);
    res.status(201).json(newCohort);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCohorts = async (req, res) => {
  try {
    const cohorts = await Cohort.findAll();
    res.json(cohorts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
