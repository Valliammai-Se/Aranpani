'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('donation_to_projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donor_id: {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: "donors"
          },
          key: "id"
        }
      },
      project_id: {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: "projects"
          },
          key: "id"
        }
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
    await queryInterface.dropTable('donation_to_projects');
  }
};