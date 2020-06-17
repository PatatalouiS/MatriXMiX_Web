
import { evaluate } from 'mathjs';

export const validMatrix = (matrix) => {
    try {
        matrix.forEach((value, index) => {
            evaluate(value); 
        });
    }
    catch(error) {
        return false;
    }
 
    return true;
};

export const validName = (name, library) => {
    return !library.some((matrixObj) => matrixObj.name === name)
        && (name !== '')
        && isNaN(name[0]);
};

export const libContains = (name, library) => {
    return library.some((matrixObj) => matrixObj.name === name);
}

export default {
    validMatrix,
    validName,
    libContains
};