
import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import LibraryHeader from './LibraryHeader';
import MatrixList from './MatrixList';
import MatrixAdder from './MatrixAdder';
import MatrixViewer from '../MatrixViewer';
import './LibraryTab.css';
import { useSelector } from 'react-redux';

const LibraryTab = () => {
    const [ currentMatrix, setCurrentMatrix ] = useState(null);
    const libraryMatrix = useSelector(x => x);

    console.log(currentMatrix);

    const handleSelected = (matrix) => {
        setCurrentMatrix(matrix);
    }

    return (
        <div className='white-bg' id="library-wrapper">
            <LibraryHeader/>
            <Grid id='library-grid'>
                { 
                    currentMatrix &&
                    <Grid.Row> 
                        <MatrixViewer matrixObj={ currentMatrix } /> 
                    </Grid.Row>
                }

                <Grid.Row>
                    <Grid.Column 
                        mobile={16} 
                        computer={4} 
                        id='library-matrix-table-column'>
                        <MatrixList handleSelect={ handleSelected }/>
                    </Grid.Column>
                    <Grid.Column 
                        mobile={16} 
                        computer={12}>
                        <MatrixAdder/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};

export default LibraryTab;