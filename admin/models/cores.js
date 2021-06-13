'use strict';

module.exports = (Sequelize, DataType) => {
  const Cores = Sequelize.define('Cores', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },

    cor: {
      allowNull: false,
      type: DataType.STRING(50)
    }
  });

  return Cores;
}