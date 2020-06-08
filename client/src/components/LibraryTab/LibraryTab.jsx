
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import LibraryHeader from './LibraryHeader';
import MatrixList from './MatrixList';
import MatrixAdder from './MatrixAdder';
import './LibraryTab.css';

const LibraryTab = () => {
    return (
        <div className='white-bg' id="library-wrapper">
            <LibraryHeader/>
            <Grid id='library-grid'>
                <Grid.Column mobile={16} computer={4}>
                    <MatrixList/>
                </Grid.Column>
                <Grid.Column mobile={16} computer={12}>
                    <MatrixAdder/>
                </Grid.Column>
            </Grid>
        </div>
    )
};

export default LibraryTab;