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
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'teclados',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'mouses',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'streaming',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'auriculares',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'parlantes',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'proximamente',
        createdAt: new Date,
        updatedAt: new Date
      },], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
