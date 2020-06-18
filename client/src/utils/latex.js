
import * as math from 'mathjs';
import Fraction from 'fraction.js';
import { isComplex, isNumber, isString } from '../utils/utils';
import { ROUND_NUMBER } from '../utils/constants';

const TeX_MATRIX_BEGIN    = '\\begin{bmatrix}';
const TeX_MATRIX_END      = '\\end{bmatrix}';
const TeX_NEWLINE         = '\\\\';
const TeX_VALUE_SEPARATOR = '&';

export const TeXFractionize = (number) => {
    if(isNumber(number)) {
        const fixed = Number.parseFloat(number).toFixed(ROUND_NUMBER);
        console.log(number, fixed);

        const roundedValue = math.round(Number.parseFloat(number)
                                        .toFixed(ROUND_NUMBER), ROUND_NUMBER);

        const fraction = new Fraction(roundedValue);
    
        return fraction.d !== 1
            ? fraction.toLatex()
            : math.parse(roundedValue).toTex();
    }
    else if(isComplex(number)) {
        const { re, im } = number;
        const imSign = im >= 0 ? '+' : '';
        
        const fractRe = TeXFractionize(re);
        const fracIm = TeXFractionize(im); 
        
        const partRe = fractRe === 0
            ? ''
            : fractRe;
            
        const partIm = fracIm === 0
            ? ''
            : fracIm;

        console.log(partRe, partIm);

        if(partRe === '0' && partIm === '0') {
            return '0';
        }
        else if(partRe === '0') {
            return `${imSign}${partIm}i`;
        }
        else if(partIm === '0') {
            return partRe;
        }
        else {
            return `${partRe}${imSign}${partIm}i`;
        }
    }
};

export const matrixToTex = ({ operation, result }) => {
    const array = result.toArray();
    let tex     = TeX_MATRIX_BEGIN;

    for(let line of array) {
        for(let value of line) {
            let TeXValue;

            if(isNumber(value)) {
                TeXValue = TeXFractionize(value);
            }
            else if(isString(value)) {
                TeXValue = math.parse(value).toTex();
            }
            else if(isComplex(value)) {
                TeXValue = TeXFractionize(value);
            } 
            else {
                throw new Error(`Error matrix value : 
                    expected complex, string, or number`);
            }
            tex += `${TeXValue} ${TeX_VALUE_SEPARATOR}`;
        }
        tex = tex.slice(0, -1);
        tex += TeX_NEWLINE;
    }

    tex += TeX_MATRIX_END;
    return tex;
};

export const realToTex = ({ operation, result }) => {
    return `${operation.name === 'DET' ? 'Det' : 'Trace'} = 
        ${TeXFractionize(result)}`;
};

export const multimatrixToTex = ({ operation, result }) => {
    return Object.keys(result).map((key) => {
        return `${key} = ${matrixToTex({ result : result[key] })}`;
    })
    .join(TeX_NEWLINE);
};

export const dimsToTex = ({ operation, result }) => {
    return `Dim(Ker) = ${result.dimKer}
            ${TeX_NEWLINE}
            Dim(Im) = ${result.dimIm}`;
};

export default {
    matrixToTex,
    realToTex,
    multimatrixToTex,
    dimsToTex
};
