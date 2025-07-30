// routes/managerRoutes.js

const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

/**
 * @swagger
 * tags:
 *   name: Managers
 *   description: Manager management
 */

/**
 * @swagger
 * /managers:
 *   post:
 *     summary: Create a new manager
 *     tags: [Managers]
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
 *               department:
 *                 type: string
 *     responses:
 *       201:
 *         description: Manager created successfully
 */

/**
 * @swagger
 * /managers:
 *   get:
 *     summary: Get all managers
 *     tags: [Managers]
 *     responses:
 *       200:
 *         description: A list of managers
 */

/**
 * @swagger
 * /managers/{id}:
 *   get:
 *     summary: Get a manager by ID
 *     tags: [Managers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Manager found
 *       404:
 *         description: Manager not found
 */

/**
 * @swagger
 * /managers/{id}:
 *   put:
 *     summary: Update a manager by ID
 *     tags: [Managers]
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
 *               department:
 *                 type: string
 *     responses:
 *       200:
 *         description: Manager updated
 *       404:
 *         description: Manager not found
 */

/**
 * @swagger
 * /managers/{id}:
 *   delete:
 *     summary: Delete a manager by ID
 *     tags: [Managers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Manager deleted
 *       404:
 *         description: Manager not found
 */

router.post('/', managerController.createManager);
router.get('/', managerController.getAllManagers);
router.get('/:id', managerController.getManagerById);
router.put('/:id', managerController.updateManager);
router.delete('/:id', managerController.deleteManager);

module.exports = router;
