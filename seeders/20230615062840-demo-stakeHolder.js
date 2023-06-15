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
    await queryInterface.bulkInsert('stake_holder', [
      {
      id: 1,
      name: 'SuperAdmin',
    },
    {
     id: 2,
     name: 'Admin',
    },
    {
     id: 3,
     name: 'AreaRep',
    },
    {
      id: 4,
      name: 'Donor',
    }
 ], {})
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stake_holder', null, {});
  }
};
