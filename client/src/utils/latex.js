
import * as math from 'mathjs';

export const matrixToTex = ({ operation, result }) => {
    const array = result.toArray();
    let tex     = '\\begin{bmatrix}';

    for(let line of array) {
        for(let value of line) {

            if(value.re || value.im) { // if it's a non-parsed complex !
                let imageSign = value.im >= 0 ? '+' : '-';  
                value = `${value.re}${imageSign}${math.abs(value.im)}i`;
            } 

            const parsedValue = math.parse(value);
            console.log(parsedValue);
            const roundedValue = parsedValue.value 
                ? math.round(parsedValue.value, 5)
                : parsedValue;

            const texValue = parsedValue.value 
                ? math.parse(roundedValue).toTex()
                : roundedValue.toTex();
            console.log(texValue);
            // const roundedValue = math.round(parsedValue, 8);
            // const latexValue = math.parse(roundedValue).toTex();
            tex += `${texValue} &`;
        }
        tex = tex.slice(0, -1);
        tex += `\\\\`;
    }

    tex += '\\end{bmatrix}';
    return tex;
};

export const realToTex = ({ operation, result }) => {
    return `${operation.name === 'DET' ? 'Det' : 'Trace'} = ${result}`;
};

export const multimatrixToTex = ({ operation, result }) => {
    return Object.keys(result).map((key, index) => {
        return `${key} = ${matrixToTex({ result : result[key] })}`;
    })
    .join('\\\\');
}

export default {
    matrixToTex,
    realToTex,
    multimatrixToTex
};