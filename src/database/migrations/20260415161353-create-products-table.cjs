'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, //definir a coluna id como inteiro
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING, //definir a coluna name como string
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2), //definir a coluna price como decimal com 10 dígitos e 2 casas decimais
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING, //definir a coluna path como string
        allowNull: false,
      },
      categgory: {
        type: Sequelize.STRING, //definir a coluna category como string
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE, //definir a coluna created_at como data
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, //definir a coluna updated_at como data
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
