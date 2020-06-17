
import React from 'react';
import MathJax from 'react-mathjax';
import { matrixToTex } from '../utils/latex';

const MatrixViewer = ({ matrixObj = null }) => {
    const latex = matrixObj
        ? matrixToTex({ result : matrixObj.matrix })
        : null

    return (
        matrixObj && 
            <MathJax.Provider>
                <div id='mjx-area' className='without-overflow'>
                    <MathJax.Node formula={ latex }/>
                </div>
            </MathJax.Provider>
    )
};

export default MatrixViewer;
