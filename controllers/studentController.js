const { Student, Class, Cohort } = require('../models');

// Create Student
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

// Get All Students
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

// Get Single Student
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: [Class, Cohort],
    });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    await student.update(req.body);
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    await student.destroy();
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
