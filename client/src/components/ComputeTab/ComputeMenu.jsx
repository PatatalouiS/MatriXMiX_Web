
import React, { useState } from 'react';
import { Segment, Form, Dropdown } from 'semantic-ui-react';
import * as math from 'mathjs';
import { NewMatrix } from '../../utils/utils';
import { OP_TYPES, OPS } from '../../utils/constants';

const optionsTypes = OP_TYPES.map(({ name, text }) => ({
    key : name,
    text : text,
    value : name
}));

const optionsOP = { ...OPS };
Object.keys(optionsOP).map((key) => {
    optionsOP[key] = optionsOP[key]
        .map(({ name, text }) => ({
            key : name,
            text : text,
            value : name
        }));
});

const ComputeMenu = ({ operation }) => {
    const [ op, setOP ] = operation;

    const handleTypeChange = (event, { value }) => {
        console.log(value);
        setOP({
            opName   : OPS[value][0].name ,
            typeName : value
        });
    };

    const handleOpChange = (event, { value }) => {
        setOP((prev) => ({
           ...prev,
            opName : value
        }));
    };

    return (
        <Segment>
            <Form>
                <Form.Select
                    label={ `Type d'opérations` }
                    placeholder='Select Operation type'
                    options={ optionsTypes }
                    value={ op.typeName }
                    onChange={ handleTypeChange }/>
                <Form.Select
                    label={ `opérations disponibles` }
                    placeholder='Select Operation type'
                    value={ op.opName }
                    options={ optionsOP[op.typeName] }
                    onChange={ handleOpChange }/>
            </Form>
        </Segment>
    )
};

export default ComputeMenu;
