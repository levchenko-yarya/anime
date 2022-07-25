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
    return queryInterface.bulkInsert('Views', [
      {
        name: 'Запланировано',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Смотрю',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пересматриваю',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Просмотрено',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Отложено',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Брошено',
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
    return queryInterface.bulkDelete('Views', {});
  },
};
