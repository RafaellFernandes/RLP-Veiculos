const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('cores/cadastro');
})

module.exports=router;