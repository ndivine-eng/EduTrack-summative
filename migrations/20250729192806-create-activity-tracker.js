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
      attendance: {
        type: Sequelize.JSON
      },
      formativeOneGrading: {
        type: Sequelize.STRING
      },
      formativeTwoGrading: {
        type: Sequelize.STRING
      },
      SummativeGrading: {
        type: Sequelize.STRING
      },
      courseModeration: {
        type: Sequelize.STRING
      },
      intranetSync: {
        type: Sequelize.STRING
      },
      gradeBookStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ActivityTrackers');
  }
};