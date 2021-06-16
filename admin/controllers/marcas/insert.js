const {Marcas} = require('../../models');

module.exports = {

    save: async (req, res) => {

        const marca = req.body.marca;

        const data = {
            marca: req.body.marca
        }

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

        const results = await Marcas.create(data);

        console.log(results);

        res.redirect('/marcas');
    }
}