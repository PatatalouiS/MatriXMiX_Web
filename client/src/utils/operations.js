
import * as math from 'mathjs';
import { matrixToTex, realToTex, 
        dimsToTex, multimatrixToTex } from './latex';
import err from './error_success';
import { fetchAPI } from './utils';

// ----------------- COMPUTE HANDLERS ------------------- //

const FUNC_ADD = (mA) => (mB) => math.add(mA, mB);
const FUNC_SUBSTRACT = (mA) => (mB) => math.subtract(mA, mB);
const FUNC_MULTIPLY = (mA) => (mB) => math.multiply(mA, mB);

const FUNC_DET = (mA) => (mB) => math.det(mA);
const FUNC_TRACE = (mA) => (mB) => math.trace(mA);
const FUNC_INVERSE = (mA) => (mB) => math.inv(mA);
const FUNC_TRANSPOSE = (mA) => (mB) => math.transpose(mA);

const FUNC_DIAGONALISATION = (mA) => async (mB) => 
    await fetchAPI('/calc/diagonalise', mA);

const FUNC_LU = (mA) => async (mB) => 
    await fetchAPI('/calc/lu', mA);

const FUNC_QR = (mA) => async (mB) => 
    await fetchAPI('/calc/qr', mA);

const FUNC_CHOLESKY = (mA) => async (mB) => 
    await fetchAPI('/calc/cholesky', mA);

const FUNC_RRF = (mA) => async (mB) => 
    await fetchAPI('/calc/rrf', mA);

const FUNC_DIMS = (mA) => async (mB) => 
    await fetchAPI('/calc/dims', mA);

// ----------------- TESTING HANDLERS ------------------ //

const sameSize = (mA) => (mB) => {
    const [ nbLA, nbCA ] = mA.size();
    const [ nbLB, nbCB ] = mB.size();

    return (nbLA === nbLB) && (nbCA === nbCB);
};

const condMultiply = (mA) => (mB) => mA.size()[1] === mB.size()[0];

const isSQMatrix = (mA) => (mB) => mA.size()[0] === mA.size()[1];

const isInverse = (mA) => (mB) => isSQMatrix(mA)() && (math.det(mA) !== 0);

const NO_COND = (mA) => (mB) => true;

const isDiagonalisableR = (mA) => async (mB) => await 
    fetchAPI('/test/isdiagonalisable_r', mA);

const isDiagonalisableC = (mA) => async (mB) => await 
    fetchAPI('/test/isdiagonalisable_c', mA);

const isLU = (mA) => async (mB) => await
    fetchAPI('/test/islu', mA);

const isQR = (mA) => (mB) => mA.size()[0] >= mA.size()[1]; 

const isCholesky = (mA) => async (mB) => await 
    fetchAPI('/test/ischolesky', mA);

// ------------------ MAIN OBJECTS ---------------------  //

export const CAT = [
    { 
        name : 'BINARY_OP',
        text : 'Opérations binaires'
    },
    {
        name : 'UNARY_OP',
        text : 'Opérations unaires'
    },
    {
        name : 'DIAGONALISATION',
        text : 'Outil de Diagonalisation'
    },
    {
        name : 'DECOMPOSITION',
        text : 'Décompositions'
    }
];

export const OPS = [
    {
        category : 'BINARY_OP',
        name : 'ADD',
        text : 'Addition (A + B)',
        func : FUNC_ADD,
        TeXFunc : matrixToTex,
        testFunc : sameSize,
        binary : true,
        err    : err.ERR_SAME_SIZE
    },
    {
        name : 'SUBSTRACT',
        category : 'BINARY_OP',
        text : 'Soustraction (A - B)',
        func : FUNC_SUBSTRACT,
        TeXFunc : matrixToTex,
        testFunc : sameSize,
        binary : true,
        err    : err.ERR_SAME_SIZE
    },
    {
        name : 'MULTIPLY',
        category : 'BINARY_OP',
        text : 'Multiplication (A * B)',
        func : FUNC_MULTIPLY,
        TeXFunc : matrixToTex,
        testFunc : condMultiply,
        binary : true,
        err    : err.ERR_MULTIPLY
    },
    {
        name : 'DET',
        category : 'UNARY_OP',
        text : 'Déterminant',
        func : FUNC_DET,
        TeXFunc : realToTex,
        testFunc : isSQMatrix,
        binary : false,
        err   :  err.ERR_SQ_MATRIX
    },
    {
        name : 'TRACE',
        category : 'UNARY_OP',
        text : 'Trace',
        func : FUNC_TRACE,
        TeXFunc : realToTex,
        testFunc : isSQMatrix,
        binary : false,
        err     : err.ERR_SQ_MATRIX
    },
    {
        name : 'INVERSE',
        category : 'UNARY_OP',
        text : 'Inverse',
        func : FUNC_INVERSE,
        TeXFunc : matrixToTex,
        testFunc : isInverse,
        binary : false,
        err    : err.ERR_INVERSE
    },
    {
        name : 'TRANSPOSE',
        category : 'UNARY_OP',
        text : 'Transposée',
        func : FUNC_TRANSPOSE,
        TeXFunc : matrixToTex,
        testFunc : NO_COND,
        binary : false,
        err   : null
    },
    {
        name : 'RRF',
        category : 'UNARY_OP',
        text : 'Echelonnage',
        func : FUNC_RRF,
        TeXFunc : matrixToTex,
        testFunc : NO_COND,
        binary : false,
        err : null
    },
    {
        name : 'DIMS',
        category : 'UNARY_OP',
        text : 'Etude des dimensions',
        func : FUNC_DIMS,
        TeXFunc : dimsToTex,
        testFunc : NO_COND,
        binary : false,
        err : null
    },
    {
        name : 'DIAG_R',
        category : 'DIAGONALISATION',
        text : 'Diagonalisation dans R',
        func : FUNC_DIAGONALISATION,
        TeXFunc : multimatrixToTex,
        testFunc : isDiagonalisableR,
        binary : false,
        err : err.ERR_DIAGONALISE_R
    },
    {
        name : 'DIAG_C',
        category : 'DIAGONALISATION',
        text : 'Diagonalisation dans C',
        func : FUNC_DIAGONALISATION,
        TeXFunc : multimatrixToTex,
        testFunc : isDiagonalisableC,
        binary : false,
        err : err.ERR_DIAGONALISE_C
    },
    {
        name : 'LU',
        category : 'DECOMPOSITION',
        text : 'Décomposition LU',
        func : FUNC_LU,
        TeXFunc : multimatrixToTex,
        testFunc : isLU,
        binary : false,
        err : err.ERR_LU
    },
    {
        name : 'QR',
        category : 'DECOMPOSITION',
        text : 'Décomposition QR',
        func : FUNC_QR,
        TeXFunc : multimatrixToTex,
        testFunc : isQR,
        binary : false,
        err : err.ERR_QR
    },
    {
        name : 'CHOLESKY',
        category : 'DECOMPOSITION',
        text : 'Décomposition Cholesky',
        func : FUNC_CHOLESKY,
        TeXFunc : multimatrixToTex,
        testFunc : isCholesky,
        binary : false,
        err : err.ERR_CHOLESKY
    },    
];

export default {
    OPS,
    CAT
};
