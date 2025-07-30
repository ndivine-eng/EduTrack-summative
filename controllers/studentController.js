const { Student, Class, Cohort } = require('../models');

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [Class, Cohort]
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
