// models/Cohort.js
'use strict';
const { Model } = require('sequelize');module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define("Cohort", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Cohort;
};

