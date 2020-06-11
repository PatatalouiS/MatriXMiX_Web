
import React, { useState } from 'react';
import ComputeHeader from './ComputeHeader';
import { Grid, Container, GridColumn } from 'semantic-ui-react';
import ComputeMenu from './ComputeMenu';
import { START_OP } from '../../utils/constants';

const ComputeTab = () => {
    const [ op, setOP ] = useState(START_OP);

    return (
        <div className="main-wrapper">
            <ComputeHeader/>
            <Grid id="compute-grid">
                <Grid.Column mobile={16} computer={5}>
                    <ComputeMenu operation={ [ op, setOP ] }/>
                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
            </Grid>
        </div>
    )
};

export default ComputeTab;