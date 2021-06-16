'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },

      login: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },

      senha: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuarios');
  }
};
