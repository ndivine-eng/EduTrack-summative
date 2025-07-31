'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.sequelize.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    
    await queryInterface.createTable('Allocations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      module_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Modules',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      class_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Classes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      facilitator_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Facilitators',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      trimester: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mode_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Modes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Allocations');
  }
};
