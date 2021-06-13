const {Marcas} =require('../../models');

module.exports={

    view:async (req,res)=>{

        const result=await Marcas.findAll(
            {where:{ativo:true }},
            {attributes:['id','marca','updatedAt']}
            );

            
            
            res.render('Marcas',{data:result});
    
            
    },
    list:async (req,res)=>{

        const result=await Marcas.findAll(
            {where:{ativo:true }},
            {attributes:['id','marca']}
            );

            
            
            res.json(result);
    
            
    },

}