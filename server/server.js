
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const testRouter = require('./testRouter.js');
const calcRouter = require('./calcRouter.js');
const path = require('path');
const dotenv = require('dotenv').config();

server.use(cors());
server.use(bodyParser.json());

// Custom middleware, for logging input routes and set more comfortably the
// request object
server.use((req, res, next) => {
    console.log('New request to : ' + req.url);
    if(req.headers.matrix) {
        req.matrix = JSON.parse(req.headers.matrix);
    }
    next();
});

// for gzip encoding
server.use('*.js', (req, res, next) => {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

//for gzip encoding
server.use('*.css', (req, res, next) => {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
});

server.use(express.static(path.join(__dirname, 'app')));

server.use('/api/test/', testRouter);
server.use('/api/calc/', calcRouter);

server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

server.listen(process.env.PORT, () => {
    console.log('Server is listenning');
});
