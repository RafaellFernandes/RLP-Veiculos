const { Veiculos } = require('../../models');

module.exports = {

    save: async (req, res) => {

        if (req.body.ano_modelo.length != 4) {
            return res.json({
                message: "Informe um ano de modelo válido" 
             });
        }

        if (req.body.ano_fabricacao.length != 4) {
            return res.json({
                message: "Informe um ano de fabricação válido" 
             });
        }

        if (!req.files)
            return res.status(400).send('Nenhuma imagem foi enviada.');

        var file = req.files.uploaded_image;
        var img_name = file.name;

        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {

            file.mv('public/images/uploads/' + file.name, function (err) {

                if (err)

                    return res.status(500).send(err);

            });
        } else {
            return res.json({
                message: "Este formato não é permitido, apenas arquivos'.png', e '.jpg" 
             });
        }

        const data = {
            modelo: req.body.modelo,
            ano_modelo: req.body.ano_modelo,
            ano_fabricacao: req.body.ano_fabricacao,
            valor: req.body.valor,
            tipo: req.body.tipo,
            foto_destaque: img_name,
            marca_id: req.body.marca_id,
            cor_id: req.body.cor_id,
            usuario_id: req.body.usuario_id,
            opcionais: req.body.opcionais
        };

        const results = await Veiculos.create(data);
        
        console.log(results);

        res.redirect('/veiculos');
    }
}