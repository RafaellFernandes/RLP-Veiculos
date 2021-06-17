const {Veiculos} = require('../../models');

module.exports = {

    update: async (req, res) => {

        const param = req.body.id;

        const data = {
            modelo: req.body.modelo,
            ano_modelo: req.body.ano_modelo,
            ano_fabricacao: req.body.ano_fabricacao,
            valor: req.body.valor,
            tipo: req.body.tipo,
            foto_destaque: req.body.foto_destaque,
            marca_id: req.body.marca_id,
            cor_id: req.body.cor_id,
            usuario_id: req.body.usuario_id,
            opcionais: req.body.opcionais
        }
        
        let update = await Veiculos.update(data,{
            where: {id: param}
        });

        res.redirect('/veiculos');
    },

    trash: async (req, res) => {

        const param = req.body.id;

        let destroy = await Veiculos.destroy({
            where: {id: param}
        });

        let find = await Veiculos.findAll({
            attributes: ['id', 'modelo', 'ano_modelo', 'ano_fabricacao', 'valor',
             'tipo', 'foto_destaque', 'marca_id', 'cor_id', 'usuario_id', 'opcionais']
        });

        res.json(find);
    }
}