'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product,{
        foreignKey: 'categoryId',
        as : 'products'
      })
      Category.belongsToMany(models.Banners,{
        as :'banners',
        through :'bannerimages',
        foreignKey :'categoryId',
        otherKey :'bannerId'
      })
    }
  };
  Category.init({
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
    paranoid: true,
    timestamps: true
  });
  return Category;
};