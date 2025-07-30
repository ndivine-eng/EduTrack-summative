'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Allocation extends Model {
    static associate(models) {
      Allocation.belongsTo(models.Module, {
        foreignKey: 'moduleId',
        as: 'module'
      });

      Allocation.belongsTo(models.Class, {
        foreignKey: 'classId',
        as: 'class'
      });

      Allocation.belongsTo(models.Facilitator, {
        foreignKey: 'facilitatorId',
        as: 'facilitator'
      });

      Allocation.belongsTo(models.Mode, {
        foreignKey: 'modeId',
        as: 'mode'
      });

      Allocation.hasOne(models.ActivityTracker, {
        foreignKey: 'allocationId',
        as: 'activityTracker'
      });
    }
  }

  Allocation.init({
    moduleId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    classId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facilitatorId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    trimester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Allocation',
    tableName: 'Allocations'
  });

  return Allocation;
};
