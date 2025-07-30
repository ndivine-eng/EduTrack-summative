'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {}

  Class.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    graduationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Class',
    tableName: 'Classes'
  });

  return Class;
};
