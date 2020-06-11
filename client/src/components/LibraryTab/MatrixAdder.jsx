
import React, { useEffect } from 'react';
import { Segment, Form, Divider, 
        Button, Icon } from 'semantic-ui-react';
import MatrixEntries from './MatrixEntries';
import { useState } from 'react';
import { validMatrix, validName } from '../../utils/validators';
import * as math from 'mathjs';
import { useSelector, useDispatch } from 'react-redux';
import { addMatrix } from '../../utils/store';
import CollapseError from '../CollapseError';
import CollapseSuccess from '../CollapseSuccess';
import handling from '../../utils/error_success';
import MatrixSpecs from './MatrixSpecs';
import { NewMatrix } from '../../utils/utils';
import _ from '../../utils/constants';

const MatrixAdder = () => {
    const matrixLibrary         = useSelector(x => x);
    const dispatch              = useDispatch();
    const [ name , setName ]    = useState('');
    const [ matrix, setMatrix ] = useState(NewMatrix(_.DEFAULT_SIZE, _.DEFAULT_SIZE));
    const [ status, setStatus ] = useState({ error : null, success : null});

    useEffect(() => {
        return () => setStatus({ error : null, success : null });
    }, [name, matrix]);

    const handleSizeChange = (type) => (event, { value }) => {
        setMatrix((prev) => {
            const [ nbL, nbC ] = prev.size();

            return math.resize(prev, [
                type === 'line' ? value : nbL, 
                type === 'line' ? nbC : value 
            ], '0');
        });
    };

    const handleValuesChange = (idL, idC) => (event, { value }) => {
        setMatrix((prev) => math.subset(prev, math.index(idL, idC), value));
    };

    const handleNameChange = (event, { value }) => {
        setName(value);
    };

    const handleSubmit = () => {
        setStatus({ error : null, success : null});
        if(!validMatrix(matrix)) {
            setStatus(prev => ({ 
                ...prev, 
                error : handling.ERR_BAD_VALUES 
            }));
        } 
        else if(!validName(name, matrixLibrary)) {
            setStatus(prev => ({ 
                ...prev, 
                error : handling.ERR_BAD_NAME
            }));
        }
        else {
            dispatch(addMatrix({ name, matrix}));
            setStatus(prev => ({ 
                ...prev, 
                success : handling.SUC_MATRIX_ADDED 
            }));
        }
    }

    return (
        <Segment>
            <Form>
                <MatrixSpecs 
                    onNameChange={ handleNameChange }
                    onSizeChange={ handleSizeChange }/>

                <Divider/>

                <MatrixEntries 
                    matrix={ matrix } 
                    handleChange = { handleValuesChange }/>

                <CollapseError 
                    visible={ !!status.error }
                    content={ status.error?.text }/>

                <CollapseSuccess 
                    visible={ !!status.success }
                    content={ status.success?.text }/>

                <div id='btn-add'>
                    <Button 
                        icon 
                        labelPosition='left' 
                        color='green' 
                        onClick={ handleSubmit }>
                        <Icon name='check' />
                            Ajouter
                    </Button>
                </div> 
            </Form>
        </Segment>
    )
};

export default MatrixAdder;
