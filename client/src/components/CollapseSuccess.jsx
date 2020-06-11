

import { Transition, Message } from 'semantic-ui-react';
import React from 'react';

const CollapseSuccess = ({ visible, animation = 'scale', duration = 1000,
                        content = null, header = '' }) => {
    return ( 
        <Transition 
            visible={ visible }
            animation={ animation }
            duration={ duration }>
                <Message positive>
                    <Message.Header> { header } </Message.Header>
                    { content }
                </Message>
        </Transition>
    )
};

export default CollapseSuccess;