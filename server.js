require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');
const { swaggerUi, swaggerSpec } = require('./swagger');

// Routes
const facilitatorRoutes = require('./routes/facilitatorRoutes');
const facilitatorModuleRoutes = require('./routes/facilitatorModuleRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const managerRoutes = require('./routes/managerRoutes');
const studentRoutes = require('./routes/studentRoutes');
const cohortRoutes = require('./routes/cohortRoutes');
const classRoutes = require('./routes/classRoutes');
const modeRoutes = require('./routes/modeRoutes');
const allocationRoutes = require('./routes/allocationRoutes');
const activityTrackerRoutes = require('./routes/activityTrackerRoutes');
const managerAuthRoutes = require('./routes/managerAuthRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());
const { addNotificationToQueue } = require('./queues/notificationQueue');

app.get('/test-notification', async (req, res) => {
  await addNotificationToQueue({
    type: 'manual-test',
    message: 'This is a Redis queue test'
  });
  res.send('Notification added to queue!');
});

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Test route
app.get('/', (req, res) => {
  res.send('EduTrack API is working 🚀');
});

// Register Routes
app.use('/api/facilitators', facilitatorRoutes);
app.use('/api/facilitator-modules', facilitatorModuleRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/managers', managerRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/cohorts', cohortRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/modes', modeRoutes);
app.use('/api/allocations', allocationRoutes);
app.use('/api/activity-logs', activityTrackerRoutes);
app.use('/api/manager-auth', managerAuthRoutes);


db.sequelize.sync({ }).then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
    console.log(` Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
});
