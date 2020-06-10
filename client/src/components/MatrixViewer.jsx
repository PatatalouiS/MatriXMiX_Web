
import React, { useMemo } from 'react';
import MathJax from 'react-mathjax';
import * as math from 'mathjs';
import { matrixToTex } from '../utils/latex';
import { Segment } from 'semantic-ui-react';

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
