'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stake_holder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stake_holder.init({
    roleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stake_holder',
  });
  return stake_holder;
};