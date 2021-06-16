'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Veiculos = Sequelize.define('Veiculos', {
      modelo: {
        type: DataTypes.STRING(50)
      },

      ano_modelo: {
        type: DataTypes.DATEONLY
      },

      ano_fabricacao: {
        type: DataTypes.DATEONLY
      },

      valor: {
        type: DataTypes.DOUBLE
      },

      tipo: {
        type: DataTypes.STRING(8)
      },

      foto_destaque: {
        type: DataTypes.STRING(50)
      },

      opcionais: {
        type: DataTypes.TEXT
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