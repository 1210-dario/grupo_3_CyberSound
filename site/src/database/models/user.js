'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role,{as:'role'})
      User.belongsTo(models.Avatar,{as:'avatar'})
      User.hasMany(models.Order,{
        foreignKey: 'userId'
      })
      User.hasMany(models.Favourite,{
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Coupon,{
        through: 'UserCoupons'
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatarId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    timestamps: true
  });
  return User;
};