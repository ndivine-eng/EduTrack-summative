const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

/**
 * @swagger
 * tags:
 *   name: Modules
 *   description: API endpoints for managing learning modules
 */

/**
 * @swagger
 * /api/modules:
 *   post:
 *     summary: Create a new learning module
 *     tags: [Modules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Module created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', moduleController.createModule);

/**
 * @swagger
 * /api/modules:
 *   get:
 *     summary: Get all learning modules
 *     tags: [Modules]
 *     responses:
 *       200:
 *         description: A list of modules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.get('/', moduleController.getAllModules);

/**
 * @swagger
 * /api/modules/{id}:
 *   put:
 *     summary: Update a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The module ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Module updated successfully
 *       404:
 *         description: Module not found
 */
router.put('/:id', moduleController.updateModule);

/**
 * @swagger
 * /api/modules/{id}:
 *   delete:
 *     summary: Delete a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The module ID
 *     responses:
 *       200:
 *         description: Module deleted successfully
 *       404:
 *         description: Module not found
 */
router.delete('/:id', moduleController.deleteModule);

module.exports = router;
