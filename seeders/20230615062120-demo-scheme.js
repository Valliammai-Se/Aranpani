'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('scheme', [{
         id: 1,
         type: 'Yearly',
         months: 12,
      },
      {
        id: 2,
        type: 'HalfYearly',
        months: 6,
      },
      {
        id: 3,
        type: 'Monthly',
        months: 1,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('scheme', null, {});
  }
};
