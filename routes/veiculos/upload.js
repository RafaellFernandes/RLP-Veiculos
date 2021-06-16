const express = require('express');
const router = express.Router();
const veiculos = require('../../controllers/veiculos/insert')

router.post('/', (req, res) => {
    res.render('veiculos/cadastro');
})

module.exports = router;