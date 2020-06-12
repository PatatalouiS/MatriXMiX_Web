
import React, { useState } from 'react';
import ComputeHeader from './ComputeHeader';
import { Grid } from 'semantic-ui-react';
import ComputeMenu from './ComputeMenu';
import { START_OP } from '../../utils/constants';
import ComputeWidget from './ComputeWidget';
import LatexViewer from './LatexViewer';
import MatrixList from '../LibraryTab/MatrixList';

const ComputeTab = () => {
    const [ operation, setOperation ] = useState(START_OP);
    const [ result, setResult ] = useState(null);

    const handleOpChange = (newOp) => {
        setResult(null);
        setOperation(newOp);
    } 

    return (
        <div className="main-wrapper">
            <Grid id="compute-grid">
                <Grid.Row>
                    <Grid.Column>
                        <ComputeHeader/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} computer={5}>
                        <ComputeMenu operation={ operation } onChange={ handleOpChange }/>
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={11}>
                        <ComputeWidget operation={ operation } resultSetter={ setResult }/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} computer={5}>
                        <MatrixList/>
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={11}>
                        <LatexViewer result={ result } operation={ operation }/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};

export default ComputeTab;