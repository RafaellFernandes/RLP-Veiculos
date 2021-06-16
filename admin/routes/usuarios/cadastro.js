const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('usuarios/cadastro');
});

module.exports = router;