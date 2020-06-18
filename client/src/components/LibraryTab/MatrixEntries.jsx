
import React, { useMemo } from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';

const MatrixEntries = ({ matrix, handleChange }) => {

    const lines = useMemo(() => matrix.toArray().map((line, idL) => (
        <Grid.Row className="entries-grid" key={ idL }> 
            { 
                line.map((value, idC) => (
                    <Grid.Column className="entries-grid" key={ idC }>
                        <div className='matrix-input'>
                            <Form.Input 
                                className='matrix-input' 
                                placeholder='0'
                                onChange={ handleChange(idL, idC) }/>
                        </div>
                    </Grid.Column>
                ))
            }
        </Grid.Row>
    )), [ matrix, handleChange ]);

    return (
        <>
            <Header size='small'> Saisie des valeurs </Header>
            <Grid columns='equal' className="entries-grid">
                { lines }
            </Grid>
        </>
    );
};

export default MatrixEntries;
