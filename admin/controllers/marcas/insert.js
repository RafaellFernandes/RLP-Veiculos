const {Marcas}=require('../../models');

module.exports={

    save:async (req,res)=>{

        const data={
            marca:req.body.marca,
            ativo:true
        }

        const result=await Marcas.create(data);

        res.redirect('/marcas');
    }
}