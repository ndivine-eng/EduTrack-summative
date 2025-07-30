const { Student, Class, Cohort } = require('../models');

exports.createStudent = async (req, res) => {
  try {
    const { name, email, classId, cohortId } = req.body;

    if (!classId || !cohortId) {
      return res.status(400).json({ error: "classId and cohortId are required" });
    }

    const student = await Student.create({ name, email, classId, cohortId });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [
        { model: Class, attributes: ['id', 'name', 'startDate', 'graduationDate'] },
        { model: Cohort, attributes: ['id', 'name'] }
      ]
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
