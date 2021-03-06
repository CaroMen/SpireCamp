'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Activities_Lists', [
      {
        hostings_id: 1,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 1,
        activities_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 1,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 3,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 2,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        activities_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 4,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 5,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 5,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 6,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 6,
        activities_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 6,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 7,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 8,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 8,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 8,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 9,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 9,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 9,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 10,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 10,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 10,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 11,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 11,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 11,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 11,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 12,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 12,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 12,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 12,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 13,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 13,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 13,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 14,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 14,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 14,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 15,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 15,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 15,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 16,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 16,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 16,
        activities_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 17,
        activities_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 17,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 17,
        activities_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 18,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 18,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 18,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 19,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 19,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 19,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 20,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 20,
        activities_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 20,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 21,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 21,
        activities_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 21,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 22,
        activities_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 22,
        activities_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostings_id: 22,
        activities_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Activities_Lists', null, {});
  }
};
