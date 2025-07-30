const express = require('express');
const router = express.Router();
const cohortController = require('../controllers/cohortController');

/**
 * @swagger
 * tags:
 *   name: Cohorts
 *   description: API endpoints for managing cohorts
 */

/**
 * @swagger
 * /api/cohorts:
 *   post:
 *     summary: Create a new cohort
 *     tags: [Cohorts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cohort created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', cohortController.createCohort);

/**
 * @swagger
 * /api/cohorts:
 *   get:
 *     summary: Get all cohorts
 *     tags: [Cohorts]
 *     responses:
 *       200:
 *         description: List of all cohorts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', cohortController.getAllCohorts);

module.exports = router;
