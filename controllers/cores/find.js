const {Cores} = require('../../models');

module.exports = {

    view:async (req, res) => {

        const result = await Cores.findAll({
            attributes: ['id', 'cor', 'updatedAt']
        });

            res.render('cores/cores', {data: result});
    },

    list:async (req, res) => {

        const result = await Cores.findAll({
            attributes: ['id', 'cor']
        });

            res.json(result);
    },
}