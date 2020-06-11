
import React from 'react';
import { Form } from 'semantic-ui-react';
import { NewArray } from '../../utils/utils';
import _ from '../../utils/constants'

const options = NewArray(_.MAX_SIZE)
    .map((el, i) => ({  
        key : i+1, 
        text : String(i+1), 
        value : i+1 
    }));

const MatrixSpecs = ({ onNameChange, onSizeChange }) => {
    return (
        <Form.Group widths='equal'>
            <Form.Input 
                fluid 
                label='Nom Matrice'
                onChange={ onNameChange }/>
            <Form.Select
                label='Nb Lignes' 
                options = { options }
                placeholder = { String(_.DEFAULT_SIZE) }
                onChange={ onSizeChange('line') }/>
            <Form.Select 
                label='Nb Colonnes' 
                options={ options }
                placeholder={ String(_.DEFAULT_SIZE) }
                onChange={ onSizeChange('column') }/>
         </Form.Group>
    )
};


export default MatrixSpecs;