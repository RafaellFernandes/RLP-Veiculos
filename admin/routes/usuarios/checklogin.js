const express=require('express');
const router=express.Router();
const login=require('../../controllers/usuarios/login');

router.post('/',login.check);

module.exports=router;
