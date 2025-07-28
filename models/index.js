require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Connected to MySQL'))
  .catch((err) => console.error('❌ DB Connection failed:', err.message));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
// db.Student = require('./Student.js')(sequelize, Sequelize);
// db.Class = require('./Class.js')(sequelize, Sequelize);
db.Module = require('./Module.js')(sequelize, Sequelize);
// db.Cohort = require('./Cohort.js')(sequelize, Sequelize);
// db.Facilitator = require('./Facilitator.js')(sequelize, Sequelize);
// db.Allocation = require('./Allocation.js')(sequelize, Sequelize);
// db.Mode = require('./Mode.js')(sequelize, Sequelize);

// Define associations if needed here (optional)

// Export db object
module.exports = db;
