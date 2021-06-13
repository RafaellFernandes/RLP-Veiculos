const {Usuarios} =require('../models');
const bcrypt=require('bcryptjs');

module.exports={
    save:async(req,res)=>{

        let senhaLimpa=req.body.senha;
        const salt=bcrypt.genSaltSync(10);
        const senha=bcrypt.hashSync(senhaLimpa,salt);

        console.log(senha);
        
        const data={
            nome:req.body.nome,
            senha:senha
        };
        
        const results=await Usuarios.create(data);

        console.log(results);
        res.redirect('/');

        //console.log(req.body.nome);
    } 
}