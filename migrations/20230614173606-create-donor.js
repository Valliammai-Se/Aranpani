'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('donors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name:
      {
        type: Sequelize.STRING
      },
      fatherOrHusbandName:
      {
        type: Sequelize.STRING,
      },
      address:
      {
        type: Sequelize.STRING
      },
      pinCode:
      {
        type: Sequelize.INTEGER
      },
      scheme:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model:
          {
            tableName: "schemes"
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
    await queryInterface.dropTable('donors');
  }
};