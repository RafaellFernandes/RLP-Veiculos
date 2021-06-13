const {Usuarios} =require('../models');

module.exports={

    show:async(req,res)=>{
        const results=await Usuarios.findAll({
            where:{ativo:true},
            attributes:['id','nome','login']
        });

        //console.log(results);
        res.json(results);
        

    },
    view:async (req,res)=>{
        const results=await Usuarios.findAll({
            where:{ativo:true},
            attributes:['id','nome','login']
        });

        res.render('index',{data:results});
    }
}