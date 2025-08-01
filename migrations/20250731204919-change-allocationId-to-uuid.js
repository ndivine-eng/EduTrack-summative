'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('ActivityTrackers', 'allocationId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Allocations',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert back to INTEGER if needed
    await queryInterface.changeColumn('ActivityTrackers', 'allocationId', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    });
  }
};
