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
 *               - studentId
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               studentId:
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   studentId:
 *                     type: string
 */
router.get('/', studentController.getAllStudents);

module.exports = router;
