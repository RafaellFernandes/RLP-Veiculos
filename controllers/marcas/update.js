const {Marcas} = require('../../models');

module.exports = {

    update: async (req, res) => {

        const param = req.body.id;

        const data = {
            marca: req.body.marca,
        }

        const marca = req.body.marca;

        if (marca.length < 3 ) {
            return res.json({
                message: "Marca inválida"
            });
        }

        let marcaExiste = await Marcas.findOne({
            where: { marca: marca }
        });

        if (marcaExiste) {
            return res.json({
                message: "A marca já foi registrado!"
            });
        }

        let update = await Marcas.update(data,{
            where: {id: param}
        });

        res.redirect('/marcas');
    },

    trash: async (req, res) => {

        const param = req.body.id;

        let destroy = await Marcas.destroy({
            where: {id: param}
        });

        let find = await Marcas.findAll({
            attributes: ['id', 'marca']
        });

        res.json(find);
    }
}