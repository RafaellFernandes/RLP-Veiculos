const express = require('express');
const router = express.Router();
const veiculos = require('../../controllers/veiculos/update');

router.post('/', veiculos.trash);

module.exports = router;