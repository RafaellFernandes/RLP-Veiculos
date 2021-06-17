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
        allowNull: true,
        type: Sequelize.INTEGER(4)
      },

      ano_fabricacao: {
        allowNull: true,
        type: Sequelize.INTEGER(4)
      },

      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },

      tipo: {
        allowNull: false,
        type: Sequelize.STRING(8)
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
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      cor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cores',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
