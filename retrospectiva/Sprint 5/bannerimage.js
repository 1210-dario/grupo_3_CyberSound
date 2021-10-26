'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BannerImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* BannerImage.belongsTo(models.Banner,{as:'banner'})
      BannerImage.belongsTo(models.Category,{as:'category'}) */
    }
  };
  BannerImage.init({
    fileName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BannerImage',
    timestamps: false
  });
  return BannerImage;
};
