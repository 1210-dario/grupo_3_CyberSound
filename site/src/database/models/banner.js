'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Banner.belongsToMany(models.Category,{
        as :'categories',
        through :'bannerimages',
        foreignKey :'bannerId',
        otherKey :'categoryId'
      })

    }
  };
  Banner.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Banners',
    paranoid: true,
    timestamps: true
  });
  return Banner;
};