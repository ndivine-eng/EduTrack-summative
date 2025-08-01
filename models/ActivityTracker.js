module.exports = (sequelize, DataTypes) => {
  const ActivityTracker = sequelize.define('ActivityTracker', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    allocationId: {
      type: DataTypes.UUID, 
      allowNull: false,
      references: {
        model: 'Allocations',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    tableName: 'ActivityTrackers',
    timestamps: true
  });

  ActivityTracker.associate = (models) => {
    ActivityTracker.belongsTo(models.Allocation, {
      foreignKey: 'allocationId',
      as: 'allocation',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return ActivityTracker;
};
