module.exports = (sequelize, DataTypes) => {
  const FacilitatorModule = sequelize.define('FacilitatorModule', {
    facilitatorId: {
      type: DataTypes.UUID, // Match Facilitator's UUID
      allowNull: false,
      references: {
        model: 'Facilitators',
        key: 'id',
      },
    },
    moduleId: {
      type: DataTypes.STRING, // Match Module's STRING id
      allowNull: false,
      references: {
        model: 'Modules',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });

  return FacilitatorModule;
};
