let express = require('express'),
    router = express.Router(),
    database = require('../config/database');

router.get('/', function (req, res) {
    database.query('select * from users', function (err, data) {
        console.log(data);
    });
});

module.exports = router;