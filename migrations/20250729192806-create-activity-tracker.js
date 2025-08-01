'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ActivityTrackers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      allocationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Allocations',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      attendance: {
        type: Sequelize.ARRAY(Sequelize.BOOLEAN),
        defaultValue: []
      },
      formativeOneGrading: {
        type: Sequelize.ENUM('Done', 'Pending', 'Not Started'),
        defaultValue: 'Not Started'
      },
      formativeTwoGrading: {
        type: Sequelize.ENUM('Done', 'Pending', 'Not Started'),
        defaultValue: 'Not Started'
      },
      summativeGrading: { // 🟢 lowercase fix
        type: Sequelize.ENUM('Done', 'Pending', 'Not Started'),
        defaultValue: 'Not Started'
      },
      courseModeration: {
        type: Sequelize.ENUM('Done', 'Pending', 'Not Started'),
        defaultValue: 'Not Started'
      },
      intranetSync: {
        type: Sequelize.ENUM('Done', 'Pending', 'Not Started'),
        defaultValue: 'Not Started'
      },
      gradeBookStatus: {
        type: Sequelize.ENUM('Done', 'Pending', 'Not Started'),
        defaultValue: 'Not Started'
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
    await queryInterface.dropTable('ActivityTrackers');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ActivityTrackers_formativeOneGrading";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ActivityTrackers_formativeTwoGrading";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ActivityTrackers_summativeGrading";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ActivityTrackers_courseModeration";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ActivityTrackers_intranetSync";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ActivityTrackers_gradeBookStatus";');
  }
};
