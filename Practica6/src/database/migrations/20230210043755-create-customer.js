'use strict';

// const { toDefaultValue } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull:false,
      },
      lastname: {
        type: Sequelize.STRING(128),
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull:false,
        unique:true,
      },
      phone: {
        type: Sequelize.STRING(20)
      },
      active: {
        type: Sequelize.BOOLEAN,
        toDefaultValue:true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};