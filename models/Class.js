// // models/Class.js
// module.exports = (sequelize, DataTypes) => {
//   const Class = sequelize.define("Class", {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//       allowNull: false
//       // Example: '001', '002', '003'
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: 'Class A'
//     },
//     startDate: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: '2024M'
//     },
//     graduationDate: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: '13th July 2027'
//     }
//   });

//   Class.associate = (models) => {
//     Class.hasMany(models.Student);
//     Class.hasMany(models.Allocation);
//   };

//   return Class;
// };
