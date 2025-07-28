// // models/Allocation.js
// const { v4: uuidv4 } = require('uuid');

// module.exports = (sequelize, DataTypes) => {
//   const Allocation = sequelize.define("Allocation", {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true
//       // Example: '7e8d2562-7c6f-4f34-9f3c-90b9f1d8ef77'
//     },
//     trimester: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: 'Trimester 1'
//     },
//     year: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: '2025'
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW
//     }
//   });

//   Allocation.associate = (models) => {
//     Allocation.belongsTo(models.Module);
//     Allocation.belongsTo(models.Class);
//     Allocation.belongsTo(models.Facilitator);
//     Allocation.belongsTo(models.Mode);
//   };

//   return Allocation;
// };
