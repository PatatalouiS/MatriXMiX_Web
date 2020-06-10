
export const matrixToTex = (matrixObj) => {
    const array = matrixObj.matrix.toArray();
    let tex     = '\\begin{bmatrix}';

    for(let line of array) {
        for(let value of line) {
            tex += `${value} &`;
        }
        tex = tex.slice(0, -1);
        tex += `\\\\`;
    }

    tex += '\\end{bmatrix}';
    return tex;
};