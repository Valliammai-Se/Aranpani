'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temple_name: {
        type: Sequelize.STRING
      },
      place:
      {
        type: Sequelize.STRING
      },
      start_date:
      {
        type: Sequelize.DATE
      },
      end_date:
      {
        type: Sequelize.DATE
      },
      person_inCharge:
      {
        type: Sequelize.STRING
      },
      contact_details:
      {
        type: Sequelize.INTEGER
      }
      activities:
      {
        type: Sequelize.STRING
      }
      estimated_value:
      {
        type: Sequelize.INTEGER
      }
      status:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: "project_status"
          },
          key: "id"
        }
      }
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
    await queryInterface.dropTable('projects');
  }
};