
import { parse } from 'mathjs';

export const validMatrix = (matrix) => {
    let valid = true
    matrix.forEach((value, index) => {
        if(parse(value).value === undefined) {
            valid = false
        }
    }) 
    
    return valid;
};

export default {
    validMatrix
};