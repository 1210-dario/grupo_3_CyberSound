'use strict';
const bcrypt = require('bcryptjs');
const password = async ()=> {
  let pass = await bcrypt.hash('12345678Ab', 10)
  return pass;
}

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

     await queryInterface.bulkInsert('Users', [{
      firstName: 'Admin1',
      lastName: 'Demo',
      email: 'admin@test1.com',
      // Important: Password not encrypted yet! 
      password:  `${await password()}`,
      roleId: 1,
      avatarId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Usuario1',
      lastName: 'Demo',
      email: 'user@test1.com',
      // Important: Password not encrypted yet! 
      password:  `${await password()}`,
      roleId: 2,
      avatarId: 1,
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
