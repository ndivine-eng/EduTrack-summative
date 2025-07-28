// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

// Updated route imports
// const studentRoutes = require('./routes/studentRoutes');
// const facilitatorRoutes = require('./routes/facilitatorRoutes');
// const cohortRoutes = require('./routes/cohortRoutes');
// const classRoutes = require('./routes/classRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
// const allocationRoutes = require('./routes/allocationRoutes');
// const modeRoutes = require('./routes/modeRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('EduTrack API is working 🚀');
});

// Routes
// app.use('/api/students', studentRoutes);
// app.use('/api/facilitators', facilitatorRoutes);
// app.use('/api/cohorts', cohortRoutes);
// app.use('/api/classes', classRoutes);
app.use('/api/modules', moduleRoutes);
// app.use('/api/allocations', allocationRoutes);
// app.use('/api/modes', modeRoutes);

// Sync DB and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
