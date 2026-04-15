'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true, //definir a coluna id como chave primária
        allowNull: false, //definir a coluna id como nula
        type: Sequelize.UUID, //definir a coluna id como UUID
        defaultValue: Sequelize.UUIDV4, //definir o valor padrão da coluna id como UUIDV4 (versão 4)
      },
      name: {
        allowNull: false, //definir a coluna name como nula
        type: Sequelize.STRING, //definir a coluna name como string
      },
      email: {
        allowNull: false, //definir a coluna email como nula
        type: Sequelize.STRING, //definir a coluna email como string
        unique: true, //definir a coluna email como única
      },
      password_hash: {
        allowNull: false, //definir a coluna password como nula
        type: Sequelize.STRING, //definir a coluna password como string
      },
      admin: {
        type: Sequelize.BOOLEAN, //definir a coluna admin como boolean
        defaultValue: false, //definir o valor padrão da coluna admin como false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
   
   await queryInterface.dropTable('users'); //deletar a tabela users
    
  },
};
