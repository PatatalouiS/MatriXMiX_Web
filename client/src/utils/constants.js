
import * as math from 'mathjs';
import { OPS } from './operations';
import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.REACT_APP_API_URL;
export const DEFAULT_SIZE = 3;
export const MAX_SIZE     = 10;

const DEBUG_STATE = [
    { name : 'A', matrix : math.matrix([[1,2,3],[4,5,6],[7,8,9]]) },
    { name : 'B', matrix : math.matrix([[1,1,1,],[1,1,1,],[1,1,1,]]) },
    { name : 'C', matrix : math.matrix([[1,0,3],[0,1,1],[5,0,1]]) },
    { name : 'D', matrix : math.matrix([[1, 2], [3, 4]]) },
    { name : 'E', matrix : math.matrix([[1,2],[3,4],[5,6]]) },
    { name : 'F', matrix : math.matrix([   
        [{re : 3, im : 4}, 2, 3.1],
        [2, {re : 1, im : 7.2}, 3],
        [2, 2, {re : 2.7 , im : 8}]
    ]) },
    { name : 'G', matrix : math.matrix([[2,-1,0],[-1,2,-1],[0,-1,2]])}
];

export const DEFAULT_STATE = DEBUG_STATE;

export const START_OP = OPS[0];

export default {
    DEFAULT_SIZE,
    MAX_SIZE,
    DEFAULT_STATE,
    API_URL,
};
