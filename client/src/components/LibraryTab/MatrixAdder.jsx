
import React from 'react';
import { Segment, Form, Divider, Button, Icon } from 'semantic-ui-react';
import MatrixEntries from './MatrixEntries';
import { useState } from 'react';
import { validMatrix } from '../../utils/validators';
import { NewArray, NewMatrix } from '../../utils/utils';
import * as math from 'mathjs';
import { useSelector, useDispatch } from 'react-redux';
import { addMatrix } from '../../utils/store';

const DEFAULT_SIZE = 3;
const MAX_SIZE = 10;

const options = NewArray(MAX_SIZE)
    .map((el, i) => ({  
        key : i+1, 
        text : String(i+1), 
        value : i+1 
    }));

const MatrixAdder = () => {
    const matrixLibrary         = useSelector(matrix => matrix);
    const dispatch              = useDispatch();
    const [ name , setName ]    = useState('');
    const [ matrix, setMatrix ] = useState( NewMatrix(DEFAULT_SIZE, DEFAULT_SIZE));
    const [ nbL, nbC ]          = matrix.size();

    console.log(matrixLibrary);

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
        if(validMatrix(matrix)) {
            dispatch(addMatrix({ name, matrix}));
        }
        else {
            console.log('error');
        }
    }

    return (
        <Segment>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        label='Nom Matrice'
                        onChange={ handleNameChange }/>
                    <Form.Select
                        label='Nb Lignes' 
                        options = { options }
                        value = { nbL } 
                        text = { String(nbL) }
                        onChange={ handleSizeChange('line') }/>
                    <Form.Select 
                        label='Nb Colonnes' 
                        value={ nbC } 
                        text={ String(nbC) }
                        options={ options }
                        onChange={ handleSizeChange('column') }/>
                </Form.Group>

                <Divider/>

                <MatrixEntries 
                    matrix={ matrix } 
                    handleChange = { handleValuesChange }/>

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
