'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Manager extends Model {
    static associate(models) {
    
    }
  }
 Manager.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {              
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Manager',
});


  return Manager;
};
