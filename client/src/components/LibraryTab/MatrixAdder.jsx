
import React from 'react';
import { Segment, Form, Divider, Button, Icon } from 'semantic-ui-react';
import MatrixEntries from './MatrixEntries';
import { useState } from 'react';
import { validMatrix } from '../../utils/validators';
import * as math from 'mathjs';

const options = new Array(10)
    .fill(null)
    .map((el, i) => ({  
        key : i+1, 
        text : String(i+1), 
        value : i+1 
    }));

const DEFAULT_SIZE = 3;

const MatrixAdder = () => {
    const [ matrix, setMatrix ] = useState( math.zeros(DEFAULT_SIZE, DEFAULT_SIZE) );
    const [ nbL, nbC ] = matrix.size();

    const setSize = (type) => (event, { value }) => {
        setMatrix((prev) => {
            const newMatrix = prev.clone();
            const [ nbL, nbC ] = prev.size();

            newMatrix.resize([ 
                type === 'line' ? value : nbL, 
                type === 'line' ? nbC : value 
            ], '0');
            return newMatrix;
        });
    };

    const setValues = (idL, idC) => (event, { value }) => {
        setMatrix((prev) => math.subset(prev, math.index(idL, idC), value));
    };

    const handleSubmit = () => {
        if(validMatrix(matrix)) {

        }
        else {
            
        }
    }

    return (
        <Segment>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        label='Nom Matrice'/>
                    <Form.Select
                        label='Nb Lignes' 
                        options = { options }
                        value = { nbL } 
                        text = { String(nbL) }
                        onChange={ setSize('line') }/>
                    <Form.Select 
                        label='Nb Colonnes' 
                        value={ nbC } 
                        text={ String(nbC) }
                        options={ options }
                        onChange={ setSize('column') }/>
                </Form.Group>

                <Divider/>

                <MatrixEntries matrix={ matrix } handleChange = { setValues }/>

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