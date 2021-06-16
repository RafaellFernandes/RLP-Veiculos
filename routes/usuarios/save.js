const express = require('express');
const router = express.Router();
const usuarios = require('../../controllers/usuarios/insert')

router.post('/', usuarios.save);

module.exports = router;