'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_id: {
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
      areaRep_id:
      {
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
      totalContribution_FinancialYear:
      {
        type: Sequelize.INTEGER
      }
      totalContribution_lifeTime:
      {
        type: Sequelize.INTEGER
      },
      groupMembersApplicable:
      {
        type: Sequelize.BOOLEAN
      },
      transactionAmt:
      {
        type: Sequelize.INTEGER
      },
      pinCode:
      {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('payment_histories');
  }
};