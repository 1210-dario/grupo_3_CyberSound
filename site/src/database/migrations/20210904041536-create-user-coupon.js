'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserCoupons', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName : 'Users'
          },
          key: 'id',
        },
      },
      couponId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName : 'Coupons'
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
    await queryInterface.dropTable('UserCoupons');
  }
};