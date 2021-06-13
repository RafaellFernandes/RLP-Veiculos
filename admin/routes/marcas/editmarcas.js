const express=require("express");
const router=express.Router();
const marcas=require('../../controllers/marcas/find');

router.get("/:id",marcas.edit);

module.exports=router;