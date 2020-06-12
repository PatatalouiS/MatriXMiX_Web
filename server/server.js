
const express = require('express');
const server = express();
const { Hello, Other, Test } = require('./build/Release/addon');
const util = require('util');
const math = require('mathjs');

const DL = {
    showHidden : false,
    depth : null
};

console.log(util.inspect(Test([[{re : 5, im : 4},2,3],[4,5,6],[7,8,9]]), DL));

console.log(math.matrix([[{re : 1, im : 4}, 18], [2.3, {re : -5, im : -3.7}]]));

server.get('/api/compute/diag', (req, res) => {

});

server.listen(8080, () => {
    console.log('Server is listenning');
});