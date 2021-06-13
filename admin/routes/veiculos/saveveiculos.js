const express=require('express');
const router=express.Router();
const veiculos=require('../../controllers/veiculos/insert');

router.post('/',veiculos.save);

module.exports=router;
