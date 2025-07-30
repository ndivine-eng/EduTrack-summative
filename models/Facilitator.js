// models/Facilitator.js
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Facilitator = sequelize.define("Facilitator", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
      // Example: 'a4f8c709-0fc7-4c24-8a9f-3f3a4b5f8c6b'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
        // Example: 'facilitator@email.com'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      // Example: 'John Doe'
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false
      // Example: 'Masters'
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
      // Example: 'Kigali'
    }
  });

  Facilitator.associate = (models) => {
    Facilitator.hasMany(models.Allocation);
  };

  return Facilitator;
};
