const {Usuarios} = require('../../models');
const bcrypt = require('bcryptjs');


module.exports = {

    check: async (req, res) => {

        const login = req.body.login;
        const senha = req.body.senha;
        
        const results = await Usuarios.findOne({
            where: {
                login: login
            }
        });

        if (results === null) {
            return res.json({
                message: "Login inválido!"
            });

        } else {
            let compara = await bcrypt.compare(senha, results.senha);
    
            if (compara === true) {
                res.redirect('/');
                return res.json({
                    message: "Logado!"
                });
            } else {
                return res.json({
                    message: "Senha inválida!"
                });
            }
        }
    }
}
