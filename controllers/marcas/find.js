const {Marcas} = require('../../models');

module.exports = {

    view:async (req, res) => {

        const result = await Marcas.findAll({
            attributes: ['id', 'marca']
        });
            res.render('marcas/marcas', {data: result});
    },

    list:async (req, res) => {

        const result = await Marcas.findAll({
            attributes: ['id', 'marca']
        });

            res.json(result);
    },
}