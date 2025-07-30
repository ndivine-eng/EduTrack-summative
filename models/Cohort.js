'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cohort extends Model {
    static associate(models) {
      Cohort.hasMany(models.Student);
    }
  }
  Cohort.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cohort',
  });
  return Cohort;
};
