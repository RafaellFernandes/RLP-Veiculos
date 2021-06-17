const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rlpveiculos'
});

module.exports = pool;