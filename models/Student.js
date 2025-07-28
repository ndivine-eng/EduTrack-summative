// // models/Student.js
// const { v4: uuidv4 } = require('uuid');

// module.exports = (sequelize, DataTypes) => {
//   const Student = sequelize.define("Student", {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true
//       // Example: '550e8400-e29b-41d4-a716-446655440000'
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true
//         // Example: 'student@email.com'
//       }
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // Example: 'Jane Doe'
//     }
//   });

//   Student.associate = (models) => {
//     Student.belongsTo(models.Class);
//     Student.belongsTo(models.Cohort);
//   };

//   return Student;
// };
