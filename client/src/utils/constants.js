
import * as math from 'mathjs';
import { OPS } from './operations';

export const DEFAULT_SIZE = 3;
export const MAX_SIZE     = 10;

const DEBUG_STATE = [
    { name : 'A', matrix : math.matrix([[1,2,3],[4,5,6],[7,8,9]]) },
    { name : 'B', matrix : math.matrix([[1,1,1,],[1,1,1,],[1,1,1,]]) },
    { name : 'C', matrix : math.matrix([[1,0,3],[0,1,1],[5,0,1]]) }
];

export const DEFAULT_STATE = DEBUG_STATE;

export const START_OP = OPS[0];

export default {
    DEFAULT_SIZE,
    MAX_SIZE,
    DEFAULT_STATE
};
