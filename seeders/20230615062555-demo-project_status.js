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
    await queryInterface.bulkInsert('project_status', [
      {
      id: 1,
      name: 'Active',
    },
    {
     id: 2,
     name: 'Planned',
    },
    {
     id: 3,
     name: 'Completed',
    },
    {
      id: 4,
      name: 'Proposed',
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
    await queryInterface.bulkDelete('project_status', null, {});
  }
};
