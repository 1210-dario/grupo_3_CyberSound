'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Avatar.hasMany(models.User,{
      //   foreignKey: 'avatarId'
      // })
    }
  };
  Avatar.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Avatar',
    paranoid: true,
    timestamps: true
  });
  return Avatar;
};