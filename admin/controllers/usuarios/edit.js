const {Usuarios} = require('../../models');

module.exports = {

    show: async (req, res) => {

        const param = req.params.id;

        const results = await Usuarios.findOne({
            where: {id: param},
            attributes: ['id', 'nome', 'login']
        });

        if (results === null) {
            res.render('error', {message: 'Algo deu errado'});
        } else {
            res.render('usuarios/edit', {data: results});
        }
    }
}