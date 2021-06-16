'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Marcas = Sequelize.define('Marcas', {
    marca: {
      type: DataTypes.STRING(50)
    }
  });

  Marcas.associate = models => {

    Marcas.hasMany(models.Veiculos, {
      as: 'veiculos'
    });

  };

  return Marcas;
}