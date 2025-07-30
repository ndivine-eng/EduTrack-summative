const express = require('express');
const router = express.Router();
const modeController = require('../controllers/modeController');

/**
 * @swagger
 * tags:
 *   name: Modes
 *   description: API endpoints for managing learning modes
 */

/**
 * @swagger
 * /api/modes:
 *   post:
 *     summary: Create a new learning mode
 *     tags: [Modes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the learning mode (e.g., Online, In-person)
 *     responses:
 *       201:
 *         description: Mode created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', modeController.createMode);

/**
 * @swagger
 * /api/modes:
 *   get:
 *     summary: Get all learning modes
 *     tags: [Modes]
 *     responses:
 *       200:
 *         description: A list of all learning modes
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
 */
router.get('/', modeController.getAllModes);

module.exports = router;
