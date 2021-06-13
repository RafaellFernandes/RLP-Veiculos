'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Usuarios', [{
			nome: 'Administrador',
			login: 'admin',
			senha: bcrypt.hashSync('12345', 8),
			createdAt: new Date(),
			updatedAt: new Date()
		}]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Usuarios', null, {});
	}
};
