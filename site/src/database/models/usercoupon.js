'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCoupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userCoupon.belongsTo(models.User,{as:'user'})
      userCoupon.belongsTo(models.Coupon,{as:'coupon'})
    }
  };
  userCoupon.init({
    userId: DataTypes.INTEGER,
    couponId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userCoupon',
    timestamps: true
  });
  return userCoupon;
};