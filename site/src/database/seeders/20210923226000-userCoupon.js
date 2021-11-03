'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('UserCoupons', [
      {
        userId: 1,
        couponId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userId: 2,
        couponId: 1,
        createdAt: new Date,
        updatedAt: new Date
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('UserCoupons', null, {});
  }
};
