const express = require("express");
const router = express.Router();
const cores = require('../../controllers/cores/edit');

router.get("/:id", cores.show);

module.exports = router;