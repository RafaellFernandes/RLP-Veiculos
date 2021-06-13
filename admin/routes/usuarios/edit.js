const express=require('express');
const router=express.Router();
const edit=require('../../controllers/usuarios/edit');

router.get('/:id',edit.show);

module.exports=router;