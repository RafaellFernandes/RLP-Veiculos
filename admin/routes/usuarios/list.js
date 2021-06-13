const express=require('express');
const router=express.Router();
const find=require('../../controllers/usuarios/list');

router.get('/',find.show);

module.exports=router;