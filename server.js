require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');
const { swaggerUi, swaggerSpec } = require('./swagger'); // <- Add this line

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

const PORT = process.env.PORT || 5000;

app.use(express.json());

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

// Sync DB and start server
db.sequelize.sync({ }).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
});
