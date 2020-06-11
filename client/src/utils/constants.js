
export const DEFAULT_SIZE = 3;
export const MAX_SIZE     = 10;

export const START_OP = {
    typeName : 'BINARY_OP',
    opName   : 'ADD'
};

export const OP_TYPES = [
    {
        name : 'BINARY_OP',
        text : 'Opérations binaires',
    },
    {
        name : 'UNARY_OP',
        text : 'Opérations unaires',
    },
    {
        name : 'DIAGONALISATION',
        text : 'Diagonalisation',
    },
    {
        name : 'DECOMPOSITION',
        text : 'Décompositions',
    },
    {
        name : 'EXPR_EVAL',
        text : `Evaluation d'expressions`,
    },
];

export const OPS = {
    'BINARY_OP' : [
        {
            name : 'ADD',
            text : 'Addition (A + B)'
        },
        {
            name : 'SUBSTRACT',
            text : 'Soustraction (A - B)'
        },
        {
            name : 'MULTIPLY',
            text : 'Multiplication (A * B)'
        },
    ],
    'UNARY_OP' : [
        {
            name : 'DET',
            text : 'Déterminant'
        },
        {
            name : 'TRACE',
            text : 'Trace'
        },
        {
            name : 'INVERSE',
            text : 'Inverse'
        },
        {
            name : 'TRANSPOSE',
            text : 'Transposée'
        },
        {
            name : 'RRF',
            text : 'Echelonnage'
        },
        {
            name : 'DIMS',
            text : 'Etude des dimensions'
        }
    ],
    'DIAGONALISATION' : [
        {
            name : 'POLY',
            text : 'Polynôme caractéristique'
        },
        {
            name : 'EIGEN',
            text : 'Valeurs/Vecteurs propres'
        },
        {
            name : 'DIAG_R',
            text : 'Diagonaliation dans R'
        },
        {
            name : 'DIAG_C',
            text : 'Diagonaliation dans C'
        },
    ],
    'DECOMPOSITION' : [
        {
            name : 'LU',
            text : 'Décomposition LU'
        },
        {
            name : 'QR',
            text : 'Décomposition QR'
        },
        {
            name : 'CHOLESKY',
            text : 'Décomposition Cholesky'
        }
    ],
    'EXPR_EVAL' : [
        {
            name : 'EXPR_EVAL',
            text : `Evaluation d'expression`
        }
    ]
};

export default {
    DEFAULT_SIZE,
    MAX_SIZE,
    OP_TYPES,
    OPS
};