const {Usuarios} = require('../../models');
const bcrypt = require('bcryptjs');

module.exports = {

    save: async (req, res) => {

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
        
        const results = await Usuarios.create(data);

        console.log(results);

        res.redirect('/usuarios');
    } 
}