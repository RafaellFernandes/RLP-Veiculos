const {Veiculos, Marcas, Cores} = require('../../models');

module.exports = {

    show: async (req, res) => {
        const results = await Veiculos.findAll({
            attributes: ['id', 'modelo', 'ano_modelo', 'ano_fabricacao', 'valor',
             'tipo', 'foto_destaque', 'marca_id', 'cor_id', 'usuario_id', 'opcionais']
        });

        res.json(results);
    },

    view: async (req, res) => {

        const results = await Veiculos.findAll({
            attributes: ['id', 'modelo', 'ano_fabricacao', 'valor',
             'tipo', 'foto_destaque', 'marca_id', 'cor_id', 'opcionais']
        });

        res.render('veiculos/veiculos', {data: results});
    }
}