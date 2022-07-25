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
    return queryInterface.bulkInsert('Genres', [
      {
        name: 'Экшен',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фантастика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Комедия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Романтика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Школа',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Повседневность',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Детектив',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарем',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Приключения',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Драма',
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
    return queryInterface.bulkDelete('Genres', {});
  },
};
