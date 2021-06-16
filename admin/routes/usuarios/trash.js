const express = require('express');
const router = express.Router();
const usuarios = require('../../controllers/usuarios/update');

router.post('/', usuarios.trash);

module.exports = router;