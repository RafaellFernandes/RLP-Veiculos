'use strict';

module.exports = (Sequelize, DataTypes) => {
  const Usuarios = Sequelize.define('Usuarios', {
    nome: {
      type: DataTypes.STRING(100)
    },

    login: {
      type: DataTypes.STRING(20)
    },

    senha: {
      type: DataTypes.STRING(100)
    }
  });

  return Usuarios;
}