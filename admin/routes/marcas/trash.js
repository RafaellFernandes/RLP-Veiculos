const express = require('express');
const router = express.Router();
const marcas = require('../../controllers/marcas/update');

router.post('/', marcas.trash);

module.exports = router;