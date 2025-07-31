// models/ActivityTracker.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActivityTracker extends Model {
    static associate(models) {
      // Each ActivityTracker belongs to one Allocation
      ActivityTracker.belongsTo(models.Allocation, {
        foreignKey: 'allocationId',
        as: 'allocation'
      });
    }
  }

  ActivityTracker.init({
    allocationId: {
      type: DataTypes.INTEGER, // FIXED: must match Allocations.id (INTEGER)
      allowNull: false,
      references: {
        model: 'Allocations',
        key: 'id'
      }
    },
    attendance: {
      type: DataTypes.JSON, // stores weekly attendance like [{"week1":"Done"}]
      allowNull: true
    },
    formativeOneGrading: {
      type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
      allowNull: false
    },
    formativeTwoGrading: {
      type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
      allowNull: false
    },
    summativeGrading: {
      type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
      allowNull: false
    },
    courseModeration: {
      type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
      allowNull: false
    },
    intranetSync: {
      type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
      allowNull: false
    },
    gradeBookStatus: {
      type: DataTypes.ENUM('Done', 'Pending', 'Not Started'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ActivityTracker',
    tableName: 'ActivityTrackers'
  });

  return ActivityTracker;
};
