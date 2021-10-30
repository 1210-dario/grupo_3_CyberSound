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
   await queryInterface.bulkInsert('Banners', [
      {
        name: 'carrousel principal',
        fileName: 'carrousel1.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'carrousel principal',
        fileName: 'carrousel2.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'carrousel principal',
        fileName: 'carrousel3.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'carrousel secundario',
        fileName: 'proximos1.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'carrousel secundario',
        fileName: 'proximos2.png',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'carrousel secundario',
        fileName: 'proximos3.jpg',
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
     await queryInterface.bulkDelete('Banners', null, {});
  }
};