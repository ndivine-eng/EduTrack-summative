// // models/Mode.js
// module.exports = (sequelize, DataTypes) => {
//   const Mode = sequelize.define("Mode", {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true
//       // Example: '001'
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: 'Online', 'Hybrid', 'In Person'
//     }
//   });

//   Mode.associate = (models) => {
//     Mode.hasMany(models.Allocation);
//   };

//   return Mode;
// };
