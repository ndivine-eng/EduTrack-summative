const express = require('express');
const router = express.Router();
const allocationController = require('../controllers/allocationController');

/**
 * @swagger
 * tags:
 *   name: Allocations
 *   description: API endpoints for managing allocations
 */

/**
 * @swagger
 * /api/allocations:
 *   get:
 *     summary: Get all allocations
 *     tags: [Allocations]
 *     responses:
 *       200:
 *         description: List of all allocations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', allocationController.getAllAllocations);

/**
 * @swagger
 * /api/allocations:
 *   post:
 *     summary: Create a new allocation
 *     tags: [Allocations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classId:
 *                 type: string
 *               cohortId:
 *                 type: string
 *               modeId:
 *                 type: string
 *               moduleId:
 *                 type: string
 *               facilitatorId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Allocation created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', allocationController.createAllocation);

module.exports = router;
