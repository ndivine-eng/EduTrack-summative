module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define("Module", {
    id: {
      type: DataTypes.STRING, // e.g., '002'
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, // e.g., 'Advanced Backend'
      allowNull: false,
    },
    half: {
      type: DataTypes.STRING, // e.g., 'H1'
      allowNull: false,
    },
  });

  return Module;
};
// This model defines a Module with an id, name, and half.
// The id is a string and serves as the primary key.