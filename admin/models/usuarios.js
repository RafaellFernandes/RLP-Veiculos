'use strict';

module.exports = (Sequelize, DataType) => {
  const Usuarios = Sequelize.define('Usuarios', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },

    nome: {
      allowNull: false,
      type: DataType.STRING(100)
    },

    login: {
      allowNull: false,
      type: DataType.STRING(20)
    },

    senha: {
      allowNull: false,
      type: DataType.STRING(100)
    }
  });

  return Usuarios;
}