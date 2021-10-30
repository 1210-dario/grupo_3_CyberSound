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
    await queryInterface.bulkInsert('BannerImages', [
      {
        BannerId: 1,
        CategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        BannerId: 2,
        CategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        BannerId: 3,
        CategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        BannerId: 4,
        CategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        BannerId: 5,
        CategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        BannerId: 6,
        CategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('BannerImages', null, {});
  }
};