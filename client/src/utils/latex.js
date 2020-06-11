
import * as math from 'mathjs';

export const matrixToTex = (matrixObj) => {
    const array = matrixObj.matrix.toArray();
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