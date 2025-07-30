require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

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

// Load base models first
db.Student = require('./Student.js')(sequelize, DataTypes);
db.Class = require('./Class.js')(sequelize, DataTypes);
db.Cohort = require('./Cohort.js')(sequelize, DataTypes);
db.Mode = require('./Mode.js')(sequelize, DataTypes);   // <- IMPORTANT
db.Module = require('./Module.js')(sequelize, DataTypes);
db.Facilitator = require('./Facilitator.js')(sequelize, DataTypes);
db.Manager = require('./Manager.js')(sequelize, DataTypes);
db.FacilitatorModule = require('./FacilitatorModule.js')(sequelize, DataTypes);

// Allocation must be loaded after Mode/Module/Class/Facilitator
db.Allocation = require('./Allocation.js')(sequelize, DataTypes);
db.ActivityTracker = require('./ActivityTracker.js')(sequelize, DataTypes);

// ---------------------------
// Define associations
// ---------------------------

// Many-to-Many Facilitator <-> Module (independent of allocations)
db.Facilitator.belongsToMany(db.Module, {
  through: db.FacilitatorModule,
  foreignKey: 'facilitatorId',
});
db.Module.belongsToMany(db.Facilitator, {
  through: db.FacilitatorModule,
  foreignKey: 'moduleId',
});

// Students
db.Student.belongsTo(db.Cohort);
db.Cohort.hasMany(db.Student);

db.Class.belongsTo(db.Cohort);
db.Cohort.hasMany(db.Class);

// If students don't need a mode, you can remove this:
db.Student.belongsTo(db.Mode);
db.Mode.hasMany(db.Student);

// ---------------------------
// Allocation relationships
// ---------------------------
db.Allocation.belongsTo(db.Module, { foreignKey: 'moduleId' });
db.Allocation.belongsTo(db.Class, { foreignKey: 'classId' });
db.Allocation.belongsTo(db.Facilitator, { foreignKey: 'facilitatorId' });
db.Allocation.belongsTo(db.Mode, { foreignKey: 'modeId' });

db.Module.hasMany(db.Allocation, { foreignKey: 'moduleId' });
db.Class.hasMany(db.Allocation, { foreignKey: 'classId' });
db.Facilitator.hasMany(db.Allocation, { foreignKey: 'facilitatorId' });
db.Mode.hasMany(db.Allocation, { foreignKey: 'modeId' });


// ---------------------------
// ActivityTracker relationship
// ---------------------------
db.Allocation.hasOne(db.ActivityTracker, { foreignKey: 'allocationId' });
db.ActivityTracker.belongsTo(db.Allocation, { foreignKey: 'allocationId' });

module.exports = db;
