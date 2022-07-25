'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('Movies', [
      {
        name: 'Ликорис Рикоил',
        description: '',
        year: '2022',
        episodes: '13',
        url: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вайолет Эвергарден. Фильм',
        description: '',
        year: '2020',
        episodes: '1',
        url: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Атака титанов',
        description: '',
        year: '2013',
        episodes: '25',
        url: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', {});
  },
};
