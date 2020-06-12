
import React, { useState } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { getOperands } from '../../utils/utils';
import { useSelector } from 'react-redux';

const ComputeWidget = ({ operation, resultSetter }) => {
    const library                   = useSelector(x => x);
    const { text, func }            = operation;
    const [ operands, setOperands ] = useState([ null, null]);

    console.log(operands);

    const handleNameChange = (index) => (event, { value }) => {
        setOperands((prev) => [ 
            index === 'first' ? value   : prev[0],
            index === 'first' ? prev[1] : value  
        ]);
    };

    const handleSubmit = () => {
        const [ mA, mB ] = getOperands(library, operands);
        resultSetter(func(mA)(mB));
    };
    
    return (
        <Segment id='compute-widget-wrapper'>
            <Header dividing className='full-width' textAlign='center'>
                { text }
                <Header.Subheader>
                    Choisissez le nom des matrices sur lesquelles effectuer l'opération
                </Header.Subheader>
            </Header>
            <Form>
                <Form.Group>
                    <Form.Input width={8} label='Nom 1ère Matrice' onChange={ handleNameChange('first') }/>
                    <Form.Input width={8} label='Nom 2nd Matrice' onChange={ handleNameChange('second') }/>
                </Form.Group>
                <Divider/>

                <div className='center-btn'>
                    <Button type='submit'
                            color='blue'
                            onClick={ handleSubmit }>
                            Calculer
                    </Button>
                </div>
            </Form>
        </Segment>
    )
};

export default ComputeWidget;