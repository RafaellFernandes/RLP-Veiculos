const express = require('express');
const router = express.Router();
const cores = require('../../controllers/cores/find');

router.get('/', cores.view);

module.exports = router;

