// const { Cohort } = require('../models');

// exports.createCohort = async (req, res) => {
//   try {
//     const cohort = await Cohort.create(req.body);
//     res.status(201).json(cohort);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.getAllCohorts = async (req, res) => {
//   try {
//     const cohorts = await Cohort.findAll();
//     res.status(200).json(cohorts);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
