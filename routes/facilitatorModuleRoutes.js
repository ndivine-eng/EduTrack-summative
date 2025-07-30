const express = require('express');
const router = express.Router();
const controller = require('../controllers/facilitatorModuleController');

/**
 * @swagger
 * tags:
 *   name: FacilitatorModules
 *   description: API for allocating modules to facilitators
 */

/**
 * @swagger
 * /api/facilitator-modules/allocate:
 *   post:
 *     summary: Allocate a module to a facilitator
 *     tags: [FacilitatorModules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               facilitatorId:
 *                 type: string
 *                 format: uuid
 *               moduleId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Allocation successful
 *       400:
 *         description: Invalid input or allocation failed
 */
router.post('/allocate', controller.allocateModule);

module.exports = router;
