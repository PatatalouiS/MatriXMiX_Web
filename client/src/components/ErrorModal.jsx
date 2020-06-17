
import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';


const ErrorModal = ({ text, open, size = 'mini', onClose , dimmer = 'blurring'}) => {
    return (
        <Modal 
            open={ open } 
            size={ size }
            onClose={ onClose }
            dimmer={ dimmer } 
            closeIcon >
            <Header 
                icon={ <Icon name='exclamation' color='red'/> } 
                content='Opération impossible !'/>
            <Modal.Content>
                { text }
            </Modal.Content>
            <Modal.Actions>
                <Button color='blue' onClick={ onClose }>
                    OK
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ErrorModal;