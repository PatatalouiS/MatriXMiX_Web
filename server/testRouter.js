
// Route : /api/test/

const testRouter = require('express').Router();
const matrix = require('./build/Release/addon');

testRouter.get('/isdiagonalisable', (req, res) => {
    res.json({
        result : matrix.isDiagonalisable(req.matrix)
    });
});

testRouter.get('/isdiagonalisable_r', (req, res) => {
    res.json({
        result : matrix.isDiagonalisableR(req.matrix)
    });
});

testRouter.get('/isdiagonalisable_c', (req, res) => {
    res.json({
        result : matrix.isDiagonalisableC(req.matrix)
    });
});

testRouter.get('/islu', (req, res) => {
    res.json({
        result : matrix.isLU(req.matrix)
    });
});

testRouter.get('/isCholesky', (req, res) => {
    res.json({
        result : matrix.isLU(req.matrix)
    });
});



module.exports = testRouter;
