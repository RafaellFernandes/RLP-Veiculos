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
        type: DataType.DATEONLY(4)
      },

      ano_fabricacao: {
        allowNull: false,
        type: DataType.DATEONLY(4)
      },

      valor: {
        allowNull: false,
        type: DataType.DOUBLE
      },

      tipo: {
        allowNull: true,
        type: DataType.ENUM('tipo')
      },

      foto_destaque: {
        allowNull: true,
        type: DataType.STRING(50)
      },

      marca_id: {
        allowNull: false,
        type: DataType.INTEGER
      },

      cor_id: {
        allowNull: false,
        type: DataType.INTEGER
      },

      usuario_id: {
        allowNull: false,
        type: DataType.INTEGER
      },

      opcionais: {
        type: DataType.TEXT
      }
  });

  Veiculos.associate = models => {

    Veiculos.belongsTo(models.Marcas, {
      foreignKey: 'marca_id', as: 'marca'
    });

    Veiculos.belongsTo(models.Cores, {
      foreignKey: 'cor_id', as: 'cor'
    });

    Veiculos.belongsTo(models.Usuarios, {
      foreignKey: 'usuario_id', as: 'usuario'
    });
  };

  return Veiculos;
}