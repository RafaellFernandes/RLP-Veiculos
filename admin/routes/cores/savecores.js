const express=require('express');
const router=express.Router();
const cores=require('../../controllers/cores/insert');

router.post('/',cores.save);

module.exports=router;
