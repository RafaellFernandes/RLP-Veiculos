'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },

      modelo: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      ano_modelo: {
        allowNull: false,
        type: Sequelize.DATEONLY(4)
      },

      ano_fabricacao: {
        allowNull: false,
        type: Sequelize.DATEONLY(4)
      },

      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },

      tipo: {
        allowNull: true,
        type: Sequelize.ENUM('tipo')
      },

      foto_destaque: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },

      marca_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Marcas',
          key: 'id'
        }
      },

      cor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cores',
          key: 'id'
        }
      },

      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },

      opcionais: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Veiculos');
  }
};
