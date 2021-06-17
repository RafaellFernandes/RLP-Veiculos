const db = require('../config/db');

module.exports = {
    async findAll(req, res){
        try {
            let response = await db.query('SELECT * FROM veiculos');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await db.query(`SELECT * FROM veiculos WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async findByTipoNovo(req, res){
        let id = req.params.id;

        try {
            let response = await db.query("SELECT * FROM veiculos ");
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },


    async findByTipoSeminovo(req, res){
        let id = req.params.id;

        try {
            let response = await db.query("SELECT * FROM veiculos ");
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    view: async (req, res) => {

        const results = await Veiculos.findOne({
            where: {
                tipo: 'novo'
            }
        });
    
        res.render('veiculos/veiculos', {data: results});
    },

    view2: async (req, res) => {

        const results = await Veiculos.findOne({
            where: {
                tipo: 'seminovo'
            }
        });
    
        res.render('veiculos/veiculos', {data: results});
    }

}