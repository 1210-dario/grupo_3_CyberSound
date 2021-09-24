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
     await queryInterface.bulkInsert('Avatars', [
      {
        name: 'avatar.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'avatar1.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'bullbasaur.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'dratini.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'pikachu.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'rattata.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'snorlax.svg',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'squirtle.svg',
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
     await queryInterface.bulkDelete('Avatars', null, {});
  }
};
