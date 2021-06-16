const express = require("express");
const router = express.Router();
const veiculos = require('../../controllers/veiculos/edit');

router.get('/:id', veiculos.show);

module.exports = router;