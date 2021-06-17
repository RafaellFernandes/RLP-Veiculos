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
    }

    // async findByTipoNovo(req, res){
    //     let id = req.params.id;

    //     try {
    //         let response = await db.query("SELECT * FROM veiculos ");
    //         res.json(response[0]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },


    // async findByTipoSeminovo(req, res){
    //     let id = req.params.id;

    //     try {
    //         let response = await db.query("SELECT * FROM veiculos ");
           
    //         res.json(response[0]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

   
}