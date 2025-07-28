// const { Student } = require('../models');

// exports.createStudent = async (req, res) => {
//   try {
//     const student = await Student.create(req.body);
//     res.status(201).json(student);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.getAllStudents = async (req, res) => {
//   try {
//     const students = await Student.findAll();
//     res.status(200).json(students);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
