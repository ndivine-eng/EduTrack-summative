// routes/activityTracker.routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/activityTrackerController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: ActivityTracker
 *   description: APIs for tracking activities by facilitators and managers
 */

/**
 * @swagger
 * /api/activity:
 *   post:
 *     summary: Create a new activity log
 *     tags: [ActivityTracker]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - timestamp
 *             properties:
 *               description:
 *                 type: string
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Activity log created successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth.managerOrFacilitator, controller.createActivityLog);


/**
 * @swagger
 * /api/activity/{id}:
 *   put:
 *     summary: Update an existing activity log
 *     tags: [ActivityTracker]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Activity log ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Activity log updated successfully
 *       404:
 *         description: Activity log not found
 */
router.put('/:id', auth.facilitator, controller.updateActivityLog);

/**
 * @swagger
 * /api/activity:
 *   get:
 *     summary: Get all activity logs
 *     tags: [ActivityTracker]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all activity logs
 */
router.get('/', auth.manager, controller.getAllActivityLogs);

/**
 * @swagger
 * /api/activity/filter:
 *   get:
 *     summary: Filter activity logs by facilitator or date
 *     tags: [ActivityTracker]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: facilitatorId
 *         schema:
 *           type: string
 *         description: Filter by facilitator ID
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter by specific date
 *     responses:
 *       200:
 *         description: Filtered activity logs
 */
router.get('/filter', auth.manager, controller.getFilteredLogs);

/**
 * @swagger
 * /api/activity/{id}:
 *   delete:
 *     summary: Delete an activity log
 *     tags: [ActivityTracker]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Activity log ID to delete
 *     responses:
 *       200:
 *         description: Activity log deleted successfully
 *       404:
 *         description: Activity log not found
 */
router.delete('/:id', auth.manager, controller.deleteActivityLog);

module.exports = router;
