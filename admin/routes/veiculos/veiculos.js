const express=require('express');
const router=express.Router();
const veiculos=require('../../controllers/veiculos/find');


router.get('/',veiculos.view);

module.exports=router;

