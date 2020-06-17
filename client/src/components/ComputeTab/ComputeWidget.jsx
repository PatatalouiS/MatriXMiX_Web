
import React, { useState } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { getOperands } from '../../utils/utils';
import { useSelector } from 'react-redux';
import ErrorModal from '../ErrorModal';
import { ERR_BAD_OPERANDS } from '../../utils/error_success';


const ComputeWidget = ({ operation, resultSetter }) => {
    const library                                       = useSelector(x => x);
    const { text, func, testFunc, err, binary, name  }  = operation;
    const [ operands, setOperands ]                     = useState([ null, null]);
    const [ error, setError ]                           = useState(null);

    const handleNameChange = (index) => (event, { value }) => {
        setOperands((prev) => [ 
            index === 'first' ? value   : prev[0],
            index === 'first' ? prev[1] : value  
        ]);
    };

    const handleSubmit = async () => {
        const [ mA, mB ] = getOperands(library, operands);

        if(name !== 'EXPR_EVAL' && ((binary && (mA === null || mB === null)) 
            || (!binary && (mA === null)))) {
            setError(ERR_BAD_OPERANDS);
        }
        else if(await testFunc(mA)(mB)) {
            resultSetter(await func(mA)(mB));
        }
        else {
            setError(err);
        }
    };
    
    return (
        <>
            <Segment id='compute-widget-wrapper'>
                <Header dividing className='full-width' textAlign='center'>
                    { text }
                    <Header.Subheader>
                        Choisissez le nom des matrices sur lesquelles
                        vous souhaiter effectuer l'opération
                    </Header.Subheader>
                </Header>
                <Form>
                    <Form.Group>
                        <Form.Input 
                            width={8} 
                            label={ name !== 'EXPR_EVAL' ? 'Nom 1ère Matrice' : 'Expression à évaluer'} 
                            onChange={ handleNameChange('first') }/>
                        {
                            binary &&
                                <Form.Input width={8} label='Nom 2nd Matrice' 
                                    onChange={ handleNameChange('second') }/>
                        }   
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

           <ErrorModal 
                open={ !!error } 
                text={ error?.text }
                onClose= { () => setError(null) } />
        </>
    )
};

export default ComputeWidget;
