
import * as math from 'mathjs';
import { API_URL } from './constants';

export const isComplex = (value) => (value.re || value.im);
export const isNumber = (value) => (typeof value === 'number');
export const isString = (value) => (typeof value === 'string');

export const NewArray = (size, init = null) => {
    return new Array(size)
        .fill(init);
};

export const NewMatrix = (nbL, nbC, value = 0) => {
    return math.zeros(nbL, nbC)
        .map(x => value);
}

export const getOperands = (library, opNames) => {
    return opNames.map(name => {        
        for(let matrixObj of library) {
            if(matrixObj.name === name) {
                return matrixObj.matrix
                    .map((value) => {
                        if(isNumber(value)) {
                            return value;
                        }
                        else if(isString(value)) {
                            return math.evaluate(value);
                        }
                        else if(isComplex(value)) {
                            return math.complex(value);
                        }
                        else {
                            throw new Error(`Error matrix value : 
                                expected complex, string, or number`);
                        }
                    });
            }
        }
        return null;
    });
};

const fetchParams = (matrix) => ({
    method : 'GET',
    headers : { 
        'Content-Type' : 'application/json',
        'Matrix' : JSON.stringify(matrix.toArray()) 
    }
});

export const fetchAPI = async (url, matrix) => {
    const res = await fetch(API_URL + url, fetchParams(matrix));
    
    if(res.ok) {
        const result = await res.json()
            .then((res) => res.result)
            .then((res) => {
                console.log(res);
                if(Array.isArray(res)) {
                    return math.matrix(res);
                }
                else if(typeof res === 'object') {
                    Object.keys(res).forEach((key) => {
                        if(Array.isArray(res[key])) {
                            res[key] = math.matrix(res[key]);   
                        }
                    });
                }
                return res;
            });

        return result;
    }
    else {
        console.error('Error on Fetch !');
    }
};

export default {
    NewArray,
    NewMatrix,
    fetchAPI,
    isComplex,
    isNumber,
    isString
};
