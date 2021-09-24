'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coupon.hasMany(models.User,{
        foreignKey: 'couponId'
      })
      Coupon.hasMany(models.userCoupon,{
        foreignKey: 'couponId'
      })
    }
  };
  Coupon.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Coupon',
    paranoid: true,
    timestamps: true
  });
  return Coupon;
};