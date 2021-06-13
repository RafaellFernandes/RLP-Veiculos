const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('marcas');
});

module.exports=router;