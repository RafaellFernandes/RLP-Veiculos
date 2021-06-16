'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Cores = Sequelize.define('Cores', {
    cor: {
      type: DataTypes.STRING(50)
    }
  });

  Cores.associate = models => {

    Cores.hasMany(models.Veiculos, {
      as: 'veiculos'
    });

  };

  return Cores;
}