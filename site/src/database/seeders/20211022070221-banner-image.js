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
        fileName: 'carrousel1.jpg',
        bannerId: 1,
        categoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'carrousel1.jpg',
        bannerId: 1,
        categoryId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'carrousel1.jpg',
        bannerId: 1,
        categoryId: 6,
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
