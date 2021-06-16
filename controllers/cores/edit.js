const {Cores} = require('../../models');

module.exports = {

    show:async(req, res) => {

        const param = req.params.id;

        const results = await Cores.findOne({
            where: {id: param},
            attributes: ['id', 'cor']
        });

        if (results === null) {
            res.render('error', {message: 'Algo deu errado'})
        } else {
            res.render('cores/edit', {data: results});
        }  
    }
}