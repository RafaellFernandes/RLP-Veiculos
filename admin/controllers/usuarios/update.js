const {Usuarios}=require('../models');

module.exports={

    update: async (req,res)=>{
        const param=req.body.id;

        const data={
            nome:req.body.nome,
            login:req.body.login,
            senha:req.body.senha,
        }
        
        let atualiza= await Usuarios.update(data,{
            where:{id:param}
        })

        res.redirect('/');
    },
    trash:async(req,res)=>{
        const param=req.body.id;

        //const data={
        //    ativo:false
        //}

        let result=await Usuarios.update(data,{
            where:{id:param},//ativo:true},
            attributes:['nome','login']
        });

        let find=await Usuarios.findAll({
            where:{ativo:true},
            attributes:['id','nome','email']

        })

        res.json(find);



    }
}