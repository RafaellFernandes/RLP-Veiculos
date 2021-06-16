const express = require('express');
const router = express.Router();
const cores = require('../../controllers/cores/update');

router.post('/', cores.update);

module.exports = router;