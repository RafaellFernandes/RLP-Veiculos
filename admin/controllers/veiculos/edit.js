const {Veiculos} = require('../../models');

module.exports = {

    show: async (req, res) => {

        const param = req.params.id;

        const results = await Veiculos.findOne({
            where: {id: param},
            attributes: ['id', 'modelo', 'marca', 'ano_modelo', 'ano_fabricacao', 'valor',
             'tipo', 'foto_destaque', 'marca_id', 'cor_id', 'usuario_id', 'opcionais']
        });

        if (results === null) {
            res.render('error', {message: 'Algo deu errado'});
        } else {
            res.render('veiculos/edit', {data: results});
        }
    }
}