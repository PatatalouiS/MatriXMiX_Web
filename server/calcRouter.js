
// Route : /api/calc

const calcRouter = require('express').Router();
const matrix = require('./build/Release/MatriXMiX');

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

calcRouter.get('/rrf', (req, res) => {
    res.json({
        result : matrix.RRF(req.matrix)
    });
});

calcRouter.get('/dims', (req, res) => {
    res.json({
        result : matrix.dims(req.matrix)
    });
});

module.exports = calcRouter;
