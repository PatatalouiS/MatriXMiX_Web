
import * as math from 'mathjs';

export const matrixToTex = ({ operation, result }) => {
    const array = result.toArray();
    let tex     = '\\begin{bmatrix}';

    for(let line of array) {
        for(let value of line) {
            const parse = math.parse(value).toTex();
            tex += `${parse} &`;
        }
        tex = tex.slice(0, -1);
        tex += `\\\\`;
    }

    tex += '\\end{bmatrix}';
    return tex;
};

export const realToTex = ({ operation, result }) => {
    console.log(operation);
    return `${operation.name === 'DET' ? 'Det' : 'Trace'} = ${result}`;
};

export default {
    matrixToTex,
    realToTex
};