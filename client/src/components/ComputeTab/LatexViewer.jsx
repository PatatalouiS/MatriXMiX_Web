
import React from 'react';
import MathJax from 'react-mathjax';
import { Segment, Header } from 'semantic-ui-react';

const LatexViewer = ({ result, operation }) => {
    const latex = result !== null
        ? operation.TeXFunc({ result, operation })
        : '';

    return (
        <Segment className='full-height' id='matrix-viewer'>
            <MathJax.Provider>
                <Header 
                    textAlign='center' 
                    id='viewer-header'
                    dividing className='full-width'>
                    Visualisateur LaTeX
                </Header>
                {
                    <div id='mjx-formula' className='vertical-align'>
                        <MathJax.Node formula={ latex }/>
                    </div>
                }
            </MathJax.Provider>
        </Segment>
    )
};

export default LatexViewer;
