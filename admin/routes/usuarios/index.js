const express = require('express');
const router = express.Router();
const find=require('../../controllers/usuarios/find');

router.get('/',find.view);



module.exports = router;
