
import React, { useState } from 'react';
import ComputeHeader from './ComputeHeader';
import { Grid } from 'semantic-ui-react';
import ComputeMenu from './ComputeMenu';
import { START_OP } from '../../utils/constants';
import ComputeWidget from './ComputeWidget';
import LatexViewer from './LatexViewer';
import MatrixList from '../LibraryTab/MatrixList';
import ViewerModal from './ViewerModal';
import './ComputeTab.css';

const ComputeTab = () => {
    const [ operation, setOperation ] = useState(START_OP);
    const [ result, setResult ] = useState(null);
    const [ modal, setModal ] = useState({ open : false, matrix : null });

    const handleOpChange = (newOp) => {
        setResult(null);
        setOperation(newOp);
    };

    const handleSelect = (matrixObj) => {
        setModal({ open : true, matrixObj });
    };

    const handleCloseModal = () => {
        setModal({ open : false, matrix : null });
    };

    return (
        <>
            <div className="main-wrapper">
                <Grid id="compute-grid">
                    <Grid.Row>
                        <Grid.Column>
                            <ComputeHeader/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column 
                            mobile={16} 
                            computer={5}>
                            <ComputeMenu 
                                operation={ operation } 
                                onChange={ handleOpChange }/>
                        </Grid.Column>
                        <Grid.Column 
                            id='compute-widget-column'
                            mobile={16} 
                            computer={11}>
                            <ComputeWidget 
                                operation={ operation } 
                                resultSetter={ setResult }/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column 
                            mobile={16} 
                            computer={5}>
                            <MatrixList handleSelect={ handleSelect }/>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} 
                            computer={11}>
                            <LatexViewer 
                                result={ result } 
                                operation={ operation }/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <ViewerModal 
                open={ modal.open }
                onClose={ handleCloseModal }
                matrixObj={ modal.matrixObj } />
        </>
    )
};

export default ComputeTab;
