const {Cores} = require('../../models');

module.exports = {

    update: async (req, res) => {

        const param = req.body.id;

        const data = {
            cor: req.body.cor,
        }

        const cor = req.body.cor;

        if (cor.length < 3 ) {
            return res.json({
                message: "Cor inválida"
            });
        }

        let corExiste = await Cores.findOne({
            where: { cor: cor }
        });

        if (corExiste) {
            return res.json({
                message: "A cor já foi registrado!"
            });
        }
        
        let update = await Cores.update(data,{
            where: {id: param}
        });

        res.redirect('/cores');
    },

    trash: async (req, res) => {

        const param = req.body.id;

        let destroy = await Cores.destroy({
            where: {id: param}
        });

        let find = await Cores.findAll({
            attributes: ['id', 'cor']
        });

        res.json(find);
    }
}