const {Usuarios} =require('../models');
const bcrypt=require('bcryptjs');


module.exports={

    check:async(req,res)=>{
        const login=req.body.login;
        const senha=req.body.senha;
        
        const result=await Usuarios.findOne(
            {where:{
                login:login
            }
        }
        );

        if(result === null){
            let message={message:'Login não encontrado'};

            res.render('error',message);
        }else{
            let compara=await bcrypt.compare(senha,result.senha);

            if(compara===true){
                res.redirect('/');
            }

        }

        
        
    }
}
