
import React from 'react';
import MathJax from 'react-mathjax';
import { matrixToTex } from '../utils/latex';

const MatrixViewer = ({ matrixObj }) => {
    const latex = matrixToTex(matrixObj)

    return (
        <MathJax.Provider>
            <div id='viewer-wrapper'>
                <MathJax.Node formula={ latex }/>
            </div>
        </MathJax.Provider>
    )
};

export default MatrixViewer;
