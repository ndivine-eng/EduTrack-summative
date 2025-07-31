// models/Student.js
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  classId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  cohortId: {
    type: DataTypes.UUID,
    allowNull: false
  }
});

  Student.associate = (models) => {
    // A Student belongs to one Class
    Student.belongsTo(models.Class, { foreignKey: 'classId' });

    // A Student belongs to one Cohort
    Student.belongsTo(models.Cohort, { foreignKey: 'cohortId' });
    // Student.belongsTo(models.Mode, { foreignKey: 'modeId' });
  };

  return Student;
};
