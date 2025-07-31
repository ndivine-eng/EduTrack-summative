module.exports = (sequelize, DataTypes) => {
  const Allocation = sequelize.define('Allocation', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    moduleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'module_id'
    },
    classId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'class_id'
    },
    facilitatorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'facilitator_id'
    },
    modeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mode_id'
    },
    trimester: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Allocations',
    timestamps: true
  });

  // Associations
  Allocation.associate = (models) => {
    Allocation.belongsTo(models.Module, {
      foreignKey: 'moduleId',
      as: 'module'
    });

    Allocation.belongsTo(models.Class, {
      foreignKey: 'classId',
      as: 'class'
    });

    Allocation.belongsTo(models.Facilitator, {
      foreignKey: 'facilitatorId',
      as: 'facilitator'
    });

    Allocation.belongsTo(models.Mode, {
      foreignKey: 'modeId',
      as: 'mode'
    });
  };

  return Allocation;
};
