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
     await queryInterface.bulkInsert('Products', [{
      name: 'Teclado Mecanico Redragon Kumara',
      description: 'Nuevo teclado mecanico Redragon Kumara, posee switchs brown e iluminacion led',
      price: 10000,
      discount: 0,
      quotas: 3,
      stock:  100,
      shipping: true,
      offer: true,
      bestSeller: true,
      showMenu: true,
      categoryId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Auriculares Redragon',
      description: 'Auriculares redragon H505 con el mejor sonido del mercado',
      price: 10000,
      discount: 0,
      quotas: 3,
      stock:  100,
      shipping: true,
      offer: true,
      bestSeller: true,
      showMenu: true,
      categoryId: 4,
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
     await queryInterface.bulkDelete('Products', null, {});
  }
};
