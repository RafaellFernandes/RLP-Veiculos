'use strict';

module.exports = (Sequelize, DataType) => {
  const Veiculos = Sequelize.define('Veiculos', {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
      },

      modelo: {
        allowNull: false,
        type: DataType.STRING(50)
      },

      ano_modelo: {
        allowNull: false,
        type: DataType.YEAR(4)
      },

      ano_fabricacao: {
        allowNull: false,
        type: DataType.YEAR(4)
      },

      valor: {
        allowNull: false,
        type: DataType.DOUBLE
      },

      tipo: {
        allowNull: false,
        type: DataType.ENUM('novo', 'seminovo')
      },

      foto_destaque: {
        allowNull: false,
        type: DataType.STRING(50)
      },

      marca_id: {
        allowNull: false,
        type: DataType.INTEGER,
        references: {
          model: 'Marcas',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      cor_id: {
        allowNull: false,
        type: DataType.INTEGER,
        references: {
          model: 'Cores',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      usuario_id: {
        allowNull: false,
        type: DataType.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      opcionais: {
        type: DataType.TEXT
      }
  });

  return Veiculos;
}