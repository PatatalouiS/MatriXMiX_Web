
import * as math from 'mathjs';
import { matrixToTex, realToTex } from './latex';

const FUNC_ADD = (mA) => (mB) => math.add(mA, mB);
const FUNC_SUBSTRACT = (mA) => (mB) => math.subtract(mA, mB);
const FUNC_MULTIPLY = (mA) => (mB) => math.multiply(mA, mB);

const FUNC_DET = (mA) => () => math.det(mA);
const FUNC_TRACE = (mA) => () => math.trace(mA);
const FUNC_INVERSE = (mA) => () => math.inv(mA);
const FUNC_TRANSPOSE = (mA) => () => math.transpose(mA);

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
    },
    {
        name : 'OTHERS',
        text : 'Autres opérations'
    }
];

export const OPS = [
    {
        category : 'BINARY_OP',
        name : 'ADD',
        text : 'Addition (A + B)',
        func : FUNC_ADD,
        TeXFunc : matrixToTex,
        binary : true
    },
    {
        name : 'SUBSTRACT',
        category : 'BINARY_OP',
        text : 'Soustraction (A - B)',
        func : FUNC_SUBSTRACT,
        TeXFunc : matrixToTex,
        binary : true
    },
    {
        name : 'MULTIPLY',
        category : 'BINARY_OP',
        text : 'Multiplication (A * B)',
        func : FUNC_MULTIPLY,
        TeXFunc : matrixToTex,
        binary : true
    },
    {
        name : 'DET',
        category : 'UNARY_OP',
        text : 'Déterminant',
        func : FUNC_DET,
        TeXFunc : realToTex,
        binary : false
    },
    {
        name : 'TRACE',
        category : 'UNARY_OP',
        text : 'Trace',
        func : FUNC_TRACE,
        TeXFunc : realToTex,
        binary : false
    },
    {
        name : 'INVERSE',
        category : 'UNARY_OP',
        text : 'Inverse',
        func : FUNC_INVERSE,
        TeXFunc : matrixToTex,
        binary : false
    },
    {
        name : 'TRANSPOSE',
        category : 'UNARY_OP',
        text : 'Transposée',
        func : FUNC_TRANSPOSE,
        TeXFunc : matrixToTex,
        binary : false
    },
    // RRF : {
    //     text : 'Echelonnage'
    // },
    // DIMS : {
    //     text : 'Etude des dimensions'
    // }
    {
        name : 'CAR_POLY',
        category : 'DIAGONALISATION',
        text : 'Polynôme caractéristique',
        binary : false
    },
    {
        name : 'EIGEN',
        category : 'DIAGONALISATION',
        text : 'Valeurs/Vecteurs propres',
        binary : false
    },
    {
        name : 'DIAG_R',
        category : 'DIAGONALISATION',
        text : 'Diagonaliation dans R',
        binary : false
    },
    {
        name : 'DIAG_C',
        category : 'DIAGONALISATION',
        text : 'Diagonaliation dans C',
        binary : false
    },
    {
        name : 'LU',
        category : 'DECOMPOSITION',
        text : 'Décomposition LU',
        binary : false
    },
    {
        name : 'QR',
        category : 'DECOMPOSITION',
        text : 'Décomposition QR',
        binary : false
    },
    {
        name : 'CHOLESKY',
        category : 'DECOMPOSITION',
        text : 'Décomposition Cholesky',
        binary : false
    },    
    {
        name : 'EXPR_EVAL',
        category : 'OTHERS',
        text : `Evaluation d'expression`,
        binary : false
    }
];

export default {
    OPS,
    CAT
};