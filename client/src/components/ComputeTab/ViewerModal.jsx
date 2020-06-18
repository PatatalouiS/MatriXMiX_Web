
import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import MatrixViewer from '../MatrixViewer';

const ViewerModal = ({ open, onClose, matrixObj }) => {
    return (
        <Modal
            open={ open } 
            onClose={ onClose }
            size='mini'
            dimmer='blurring'
            closeIcon>
            <Modal.Content>
                <MatrixViewer matrixObj={ matrixObj }/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='blue' onClick={ onClose }>
                    OK
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ViewerModal;