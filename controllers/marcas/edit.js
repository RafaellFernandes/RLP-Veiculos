const {Marcas} = require('../../models');

module.exports = {

    show:async(req, res) => {

        const param = req.params.id;

        const results = await Marcas.findOne({
            where: {id: param},
            attributes: ['id', 'marca']
        });

        if (results === null) {
            res.render('error', {message: 'Algo deu errado'})
        } else {
            res.render('marcas/edit', {data: results});
        }  
    }
}