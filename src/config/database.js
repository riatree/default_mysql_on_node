let mysql = require('mysql');

let pool = mysql.createConnection({
    host : 'localhost',
    password : '1111',
    user : 'root',
    database : 'test',
    connectionLimit : 5,
});

pool.connect();

module.exports = pool;

