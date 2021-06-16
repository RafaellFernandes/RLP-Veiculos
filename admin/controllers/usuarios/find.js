const {Usuarios} = require('../../models');

module.exports = {

    show: async (req, res) => {
        const results = await Usuarios.findAll({
            attributes: ['id', 'nome', 'login']
        });

        res.json(results);
    },

    view: async (req, res) => {
        const results = await Usuarios.findAll({
            attributes: ['id', 'nome', 'login']
        });

        res.render('usuarios/usuarios', {data: results});
    }
}