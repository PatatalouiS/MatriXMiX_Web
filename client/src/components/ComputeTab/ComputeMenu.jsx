
import React, { useState, useMemo } from 'react';
import { Segment, Form } from 'semantic-ui-react';
import { OPS, CAT } from '../../utils/operations';

const optionsTypes = CAT.map(({ name, text }) => ({
    key : name,
    text : text,
    value : name
}));

const ComputeMenu = ({ operation, onChange }) => {
    const [ category, setCategory ] = useState(CAT[0]); 

    const optionsOp = useMemo(() => {
        return OPS.filter((op ) => op.category === category.name)
            .map((op, key) => ({
                key : key,
                text : op.text,
                value : op.name
            }));
    }, [ category ]);
    
    const handleTypeChange = (event, { value }) => {
        setCategory(CAT.find(({ name }) => name === value ));
        onChange(OPS.find(({ category }) => category === value));
    };

    const handleOpChange = (event, { value }) => {
        onChange(OPS.find(({ name }) => name === value));
    }

    return (
        <Segment className='full-height'>
            <Form>
                <Form.Select
                    label={ `Type d'opérations` }
                    placeholder='Select Operation type'
                    options={ optionsTypes }
                    text={  category.text }
                    value={ category.text }
                    onChange={ handleTypeChange }/>
                <Form.Select
                    label={ `opérations disponibles` }
                    placeholder='Select Operation type'
                    options={ optionsOp }
                    text={ operation.text }
                    value={ operation.text }
                    onChange={ handleOpChange }/>
            </Form>
        </Segment>
    )
};

export default ComputeMenu;
