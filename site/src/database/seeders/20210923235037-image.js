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
     await queryInterface.bulkInsert('Images', [
      {
        fileName: 'teclado0-1.png',
        productId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado0-2.png',
        productId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado0-3.png',
        productId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado1-1.png',
        productId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado1-2.png',
        productId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado1-3.png',
        productId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado2-1.png',
        productId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado2-2.png',
        productId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado2-3.png',
        productId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado3-1.png',
        productId: 4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado3-2.png',
        productId: 4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado3-3.png',
        productId: 4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado4-1.png',
        productId: 5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado4-2.png',
        productId: 5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'teclado4-3.png',
        productId: 5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse0-1.png',
        productId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse0-2.png',
        productId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse0-3.png',
        productId: 6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse1-1.png',
        productId: 7,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse1-2.png',
        productId: 7,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse1-3.png',
        productId: 7,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse2-1.png',
        productId: 8,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse2-2.png',
        productId: 8,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse2-3.png',
        productId: 8,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse3-1.png',
        productId: 9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse3-2.png',
        productId: 9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse3-3.png',
        productId: 9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse4-1.png',
        productId: 10,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse4-2.png',
        productId: 10,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse4-3.png',
        productId: 10,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse5-1.png',
        productId: 11,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse5-2.png',
        productId: 11,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse5-3.png',
        productId: 11,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse6-1.png',
        productId: 12,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse6-2.png',
        productId: 12,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse6-3.png',
        productId: 12,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse7-1.png',
        productId: 13,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse7-2.png',
        productId: 13,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse7-3.png',
        productId: 13,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse8-1.png',
        productId: 14,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse8-2.png',
        productId: 14,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse8-3.png',
        productId: 14,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse9-1.png',
        productId: 15,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse9-2.png',
        productId: 15,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'mouse9-3.png',
        productId: 15,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla0-1.png',
        productId: 16,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla0-2.png',
        productId: 16,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla0-3.png',
        productId: 16,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla1-1.png',
        productId: 17,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla1-2.png',
        productId: 17,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla1-3.png',
        productId: 17,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla2-1.png',
        productId: 18,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla2-2.png',
        productId: 18,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla2-3.png',
        productId: 18,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla3-1.png',
        productId: 19,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla3-2.png',
        productId: 19,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'silla3-3.png',
        productId: 19,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro0-1.png',
        productId: 20,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro0-2.png',
        productId: 20,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro0-3.png',
        productId: 20,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro1-1.png',
        productId: 21,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro1-2.png',
        productId: 21,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro1-3.png',
        productId: 21,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro2-1.png',
        productId: 22,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro2-2.png',
        productId: 22,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro2-3.png',
        productId: 22,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro3-1.png',
        productId: 23,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro3-2.png',
        productId: 23,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro3-3.png',
        productId: 23,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro4-1.png',
        productId: 24,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro4-2.png',
        productId: 24,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'micro4-3.png',
        productId: 24,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam0-1.png',
        productId: 25,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam0-2.png',
        productId: 25,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam0-3.png',
        productId: 25,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam1-1.png',
        productId: 26,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam1-2.png',
        productId: 26,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam1-3.png',
        productId: 26,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam2-1.png',
        productId: 27,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam2-2.png',
        productId: 27,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'webcam2-3.png',
        productId: 27,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante0-1.png',
        productId: 28,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante0-2.png',
        productId: 28,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante0-3.png',
        productId: 28,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante1-1.png',
        productId: 29,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante1-2.png',
        productId: 29,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante1-3.png',
        productId: 29,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante2-1.png',
        productId: 30,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante2-2.png',
        productId: 30,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante2-3.png',
        productId: 30,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante3-1.png',
        productId: 31,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante3-2.png',
        productId: 31,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante3-3.png',
        productId: 31,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante4-1.png',
        productId: 32,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante4-2.png',
        productId: 32,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante4-3.png',
        productId: 32,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante5-1.png',
        productId: 33,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante5-2.png',
        productId: 33,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante5-3.png',
        productId: 33,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante6-1.png',
        productId: 34,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante6-2.png',
        productId: 34,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante6-3.png',
        productId: 34,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante7-1.png',
        productId: 35,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante7-2.png',
        productId: 35,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante7-3.png',
        productId: 35,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante8-1.png',
        productId: 36,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante8-2.png',
        productId: 36,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante8-3.png',
        productId: 36,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante9-1.png',
        productId: 37,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante9-2.png',
        productId: 37,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante9-3.png',
        productId: 37,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante10-1.png',
        productId: 38,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante10-2.png',
        productId: 38,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante10-3.png',
        productId: 38,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante11-1.png',
        productId: 39,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante11-2.png',
        productId: 39,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'parlante11-3.png',
        productId: 39,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri0-1.png',
        productId: 40,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri0-2.png',
        productId: 40,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri0-3.png',
        productId: 40,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri1-1.png',
        productId: 41,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri1-2.png',
        productId: 41,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri1-3.png',
        productId: 41,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri2-1.png',
        productId: 42,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri2-2.png',
        productId: 42,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri2-3.png',
        productId: 42,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri3-1.png',
        productId: 43,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri3-2.png',
        productId: 43,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri3-3.png',
        productId: 43,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri4-1.png',
        productId: 44,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri4-2.png',
        productId: 44,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri4-3.png',
        productId: 44,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri5-1.png',
        productId: 45,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri5-2.png',
        productId: 45,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri5-3.png',
        productId: 45,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri6-1.png',
        productId: 46,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri6-2.png',
        productId: 46,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri6-3.png',
        productId: 46,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri7-1.png',
        productId: 47,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        fileName: 'auri7-2.png',
        productId: 47,
        createdAt: new Date,
        updatedAt: new Date
      }
      ,
      {
        fileName: 'auri7-2.png',
        productId: 47,
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
     await queryInterface.bulkDelete('Images', null, {});
  }
};
