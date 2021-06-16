const {Veiculos} = require('../../models');
const {Marcas} = require('../../models');
const {Cores} = require('../../models');
const {Usuarios} = require('../../models');

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

        const compararMarca = await Marcas.findOne({
            where: {
                marca: marca_id
            }
        });

        if (!compararMarca) {
            return res.json({
                message: "Marca inválida"
            });
        }

        const compararCor = await Cores.findOne({
            where: {
                cor: cor_id
            }
        });

        if (!compararCor) {
            return res.json({
                message: "Cor inválida"
            });
        }

        const compararUsuario = await Usuarios.findOne({
            where: {
                login: usuario_id
            }
        });

        if (!compararUsuario) {
            return res.json({
                message: "Usuário inválida"
            });
        }

        if (ano_modelo < "1970" && ano_modelo > "2021") {
            return res.json({
                message: "O ano do modelo deve ser superior a 1970 e menor que 2021"
            });
        }

        if (ano_fabricacao < "1970" && ano_fabricacao > "2021") {
            return res.json({
                message: "O ano do modelo deve ser superior a 1970 e menor que 2021"
            });
        }

       



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

        const results = await Veiculos.create(data);

        console.log(results);

        res.redirect('/veiculos');
    }
}