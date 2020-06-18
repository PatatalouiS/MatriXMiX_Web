
import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import LibraryHeader from './LibraryHeader';
import MatrixList from './MatrixList';
import MatrixAdder from './MatrixAdder';
import MatrixViewer from '../MatrixViewer';
import './LibraryTab.css';

const LibraryTab = () => {
    const [ currentMatrix, setCurrentMatrix ] = useState(null);

    const handleSelected = (matrix) => {
        setCurrentMatrix(matrix);
    }

    return (
        <div className='main-wrapper'>
            <Grid id='library-grid'>
                <Grid.Row>
                    <Grid.Column>
                        <LibraryHeader/>
                    </Grid.Column>
                </Grid.Row>
                { 
                    currentMatrix &&
                        <MatrixViewer matrixObj={ currentMatrix }/> 
                }
                <Grid.Row>
                    <Grid.Column 
                        mobile={16} 
                        computer={5} 
                        className='scrollable'>
                        <MatrixList 
                            handleSelect={ handleSelected }
                            remove />                 
                    </Grid.Column>
                    <Grid.Column 
                        mobile={16} 
                        computer={11}>
                        <MatrixAdder onAdd={ handleSelected }/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};

export default LibraryTab;
