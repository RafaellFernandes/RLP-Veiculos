const express = require('express');
const router = express.Router();
const veiculos = require('../../controllers/veiculos/update');

router.post('/', veiculos.update);

module.exports = router;