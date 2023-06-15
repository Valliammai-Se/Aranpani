'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_history.init({
    transaction_id: DataTypes.INTEGER,
    donor_id: DataTypes.INTEGER,
    areaRep_id: DataTypes.INTEGER,
    totalContribution_FinancialYear: DataTypes.INTEGER,
    totalContribution_lifeTime: DataTypes.INTEGER,
    groupMembersApplicable: DataTypes.BOOLEAN,
    transactionAmt: DataTypes.INTEGER,
    pinCode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment_history',
  });
  return payment_history;
};