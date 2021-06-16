const express = require('express');
const router = express.Router();
const find = require('../../controllers/usuarios/find');

router.get('/', find.show);

module.exports = router;