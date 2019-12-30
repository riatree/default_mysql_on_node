let express = require('express'),
    http = require('http'),
    app = express(),
    idxRouter = require('./routes/index.js');

app.use('/', idxRouter);

http.createServer(app).listen(3000, function () {
    console.log("Start Server");
});

