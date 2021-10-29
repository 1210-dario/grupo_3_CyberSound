'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BannerImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BannerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName : 'Banners'
          },
          key: 'id',
        },
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName : 'Categories'
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BannerImages');
  }
};