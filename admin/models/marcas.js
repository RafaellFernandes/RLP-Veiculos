'use strict';

module.exports = (Sequelize, DataType) => {
  const Marcas = Sequelize.define('Marcas', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },

    marca: {
      allowNull: false,
      type: DataType.STRING(50)
    }
  });

  return Marcas;
}