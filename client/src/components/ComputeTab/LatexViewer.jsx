
import React from 'react';
import MathJax from 'react-mathjax';

const LatexViewer = ({ result, operation }) => {
    const latex = result !== null
        ? operation.TeXFunc({ result, operation })
        : null;

    return (
        latex  &&
            <MathJax.Provider>
                <div id='viewer-wrapper'>
                    <MathJax.Node formula={ latex }/>
                </div>
            </MathJax.Provider>
    )
};

export default LatexViewer;
