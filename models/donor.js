'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donor.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    fatherOrHusbandName: DataTypes.STRING,
    address: DataTypes.STRING,
    pinCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'donor',
  });
  return donor;
};