
import * as math from 'mathjs';
import { OPS } from './operations';
import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.REACT_APP_API_URL;
export const DEFAULT_SIZE = 3;
export const MAX_SIZE     = 7;
export const ROUND_NUMBER = 9;

const DEBUG_STATE = [
    { name : 'ID', matrix : math.matrix([[1,0,0],[0,1,0],[0,0,1]]) },
    { name : 'ONE', matrix : math.matrix([[1,1,1,],[1,1,1,],[1,1,1]]) },
    { name : 'PB', matrix : math.matrix([[1,0,3],[0,1,1],[5,0,1]]) },
    { name : 'SYM', matrix : math.matrix([[4,2,2],[2,4,2],[2,2,4]])},
    { name : 'A', matrix : math.matrix([
        ["sqrt(2) * 6", "sqrt(2)/3", 35],
        ["3 + sqrt(2)i", "5 + (1/3)i", 1 ],
        [0, "sqrt(5)", 1]
    ])},
];

export const DEFAULT_STATE = DEBUG_STATE;

export const START_OP = OPS[0];

export default {
    DEFAULT_SIZE,
    MAX_SIZE,
    DEFAULT_STATE,
    API_URL,
    ROUND_NUMBER
};
