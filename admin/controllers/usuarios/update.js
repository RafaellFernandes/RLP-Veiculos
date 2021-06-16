const {Usuarios} = require('../../models');
const bcrypt = require('bcryptjs');

module.exports = {

    update: async (req, res) => {

        let senhaLimpa = req.body.senha;
        
        if (senhaLimpa.length < 8) {
            return res.json({
               message: "Senha muito curta (precisa ter mais que 8 caracteres)" 
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const senha = bcrypt.hashSync(senhaLimpa, salt);
        const nome = req.body.nome;
        const login = req.body.login;

        const param = req.body.id;

        const data = {
            nome: req.body.nome,
            login: req.body.login,
            senha: senha
        };

        if (nome.length < 3 ) {
            return res.json({
                message: "Nome inválido"
            });
            
        }

        if (login.length < 5 ) {
            return res.json({
                message: "Login muito curto (precisa ter mais que 6 caracteres)"
            });
        }

        let usuarioExiste = await Usuarios.findOne({
            where: { login: login }
        });

        if (usuarioExiste) {
            return res.json({
                message: "Usuário já existe"
            });
        }
        
        let update = await Usuarios.update(data,{
            where: {id: param}
        });

        res.redirect('/usuarios');
    },

    trash: async (req, res) => {

        const param = req.body.id;

        let destroy = await Usuarios.destroy({
            where: {id: param}
        });

        let find = await Usuarios.findAll({
            attributes: ['id', 'nome', 'login']
        });

        res.json(find);
    }
}