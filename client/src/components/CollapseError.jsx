
import { Transition, Message } from 'semantic-ui-react';
import React from 'react';

const CollapseError = ({ visible, animation = 'scale', duration = 1000,
                        content = null, header = '' }) => {
    return ( 
        <Transition 
            visible={ visible }
            animation={ animation }
            duration={ duration }>
                <Message error>
                    <Message.Header> { header } </Message.Header>
                    { content }
                </Message>
        </Transition>
    )
};

export default CollapseError;