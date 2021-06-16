const {Cores} = require('../../models');

module.exports = {

    save: async (req, res) => {

        const cor = req.body.cor;

        const data = {
            cor: req.body.cor
        }

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

        const results = await Cores.create(data);

        console.log(results);

        res.redirect('/cores');
    }
}