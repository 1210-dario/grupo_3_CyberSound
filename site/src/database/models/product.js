'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Image,{
        foreignKey: 'productId'
      })
      Product.hasMany(models.OrderDetail,{
        foreignKey: 'productId'
      })
      Product.hasMany(models.Favourite,{
        foreignKey: 'productId'
      })
      Product.belongsTo(models.Category,{as:'category'})
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    quotas: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    shipping: DataTypes.BOOLEAN,
    offer: DataTypes.BOOLEAN,
    bestSeller: DataTypes.BOOLEAN,
    showMenu: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
    paranoid: true,
    timestamps: true
  });
  return Product;
};