
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const testRouter = require('./testRouter.js');
const calcRouter = require('./calcRouter.js');
const path = require('path');

server.use(cors());
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'build')));

// Custom middleware, for logging input routes and set more comfortably the
// request object
server.use((req, res, next) => {
    console.log('New request to : ' + req.url);

    if(req.headers.matrix) {
        req.matrix = JSON.parse(req.headers.matrix);
    }
    else if(req.headers.expr) {
        req.expr = req.headers.expr;
    }
    next();
});

server.use('/api/test/', testRouter);
server.use('/api/calc/', calcRouter);

server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(8080, () => {
    console.log('Server is listenning');
});
