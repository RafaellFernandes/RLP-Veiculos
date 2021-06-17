const express = require('express');
const router = express.Router();
const veiculos = require('../controllers/ControllerVeiculo');

router.get('/', veiculos.show);

module.exports = router;