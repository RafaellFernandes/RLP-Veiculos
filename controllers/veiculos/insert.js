const {Veiculos} = require('../../models');

module.exports = {

    save: async (req, res) => {

        const ano_modelo = req.body.ano_modelo;
        const ano_fabricacao = req.body.ano_fabricacao;
        const valor = req.body.valor;
        const tipo = req.body.tipo;
        const foto_destaque = req.body.foto_destaque;
        const marca_id = req.body.marca_id;
        const cor_id = req.body.cor_id;
        const usuario_id = req.body.usuario_id;

        const data = {
            modelo: req.body.modelo,
            ano_modelo: ano_modelo,
            ano_fabricacao: ano_fabricacao,
            valor: valor,
            tipo: tipo,
            foto_destaque: foto_destaque,
            marca_id: marca_id,
            cor_id: cor_id,
            usuario_id: usuario_id,
            opcionais: req.body.opcionais
        };

        console.log(data);

        const results = await Veiculos.create(data);

        console.log(results);

        res.redirect('/veiculos');
    }
}