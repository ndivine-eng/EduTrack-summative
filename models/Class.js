// models/Class.js

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
    },
    cohortId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Cohorts',
        key: 'id',
      },
    },
  });

  return Class;
};
