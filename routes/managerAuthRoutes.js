const express = require('express');
const router = express.Router();
const controller = require('../controllers/managerAuthController');
const { Manager } = require('../models');

// Debug route: list all managers
router.get('/all', async (req, res) => {
  try {
    const managers = await Manager.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email']
    });
    res.json(managers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * tags:
 *   name: Managers
 *   description: Manager authentication
 */

/**
 * @swagger
 * /api/managers/register:
 *   post:
 *     summary: Register a new manager
 *     tags: [Managers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: manager@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *               firstName:
 *                 type: string
 *                 example: Divine
 *               lastName:
 *                 type: string
 *                 example: Nubuhoro
 *     responses:
 *       201:
 *         description: Manager registered successfully
 *       400:
 *         description: Invalid input or manager already exists
 */
router.post('/register', controller.register);

/**
 * @swagger
 * /api/managers/login:
 *   post:
 *     summary: Login a manager
 *     tags: [Managers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: manager@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: Login successful, returns token
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', controller.login);

module.exports = router;
