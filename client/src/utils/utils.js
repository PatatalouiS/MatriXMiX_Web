
import * as math from 'mathjs';
import { API_URL } from './constants';

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
                if(typeof res === 'array') {
                    return math.matrix(res);
                }
                else if(typeof res === 'object') {
                    Object.keys(res).forEach((key) => {
                        res[key] = math.matrix(res[key]);
                    });
                }
                return res;
            });

        return result;
    }
    else {
        console.error('Error on Fetch !');
    }
}

export default {
    NewArray,
    NewMatrix,
    fetchAPI
};
