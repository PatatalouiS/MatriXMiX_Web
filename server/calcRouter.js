
// Route : /api/calc

const calcRouter = require('express').Router();
const matrix = require('./build/Release/addon');

calcRouter.get('/diagonalise', (req, res) => {
    res.json({
        result : matrix.diagonalise(req.matrix)
    });
});

calcRouter.get('/lu', (req, res) => {
    res.json({
        result : matrix.LU(req.matrix)
    });
});

calcRouter.get('/qr', (req, res) => {
    res.json({
        result : matrix.QR(req.matrix)
    });
});

calcRouter.get('/cholesky', (req, res) => {
    res.json({
        result : matrix.cholesky(req.matrix)
    });
});


module.exports = calcRouter;
