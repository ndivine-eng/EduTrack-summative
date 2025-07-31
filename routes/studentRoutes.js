const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API endpoints for managing students
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Register a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - classId
 *               - cohortId
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               classId:
 *                 type: string
 *               cohortId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student registered successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', studentController.createStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all registered students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of students
 */
router.get('/', studentController.getAllStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student data
 *       404:
 *         description: Student not found
 */
router.get('/:id', studentController.getStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               classId:
 *                 type: string
 *               cohortId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated
 *       404:
 *         description: Student not found
 */
router.put('/:id', studentController.updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student deleted
 *       404:
 *         description: Student not found
 */
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
