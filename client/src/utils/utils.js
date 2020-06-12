
import * as math from 'mathjs';

export const NewArray = (size, init = null) => {
    return new Array(size)
        .fill(init);
};

export const NewMatrix = (nbL, nbC, value = '0') => {
    return math.zeros(nbL, nbC)
        .map(x => value);
}

export const getOperands = (library, opNames) => {
    return opNames.map(name => {        
        for(let matrixObj of library) {
            if(matrixObj.name === name){
                return matrixObj.matrix;
            }
        }
        return 'NOT_EXIST'
    });
};

export default {
    NewArray,
    NewMatrix
};