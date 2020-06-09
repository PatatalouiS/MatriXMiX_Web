
import React, { useState } from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';

const MatrixEntries = ({ matrix, handleChange }) => {
    const [ idL, idC ] = matrix.size();

    const lines = new Array(idL)
        .fill(null)
        .map((x, idL2) => {
            const columns = new Array(idC)
                .fill(null)
                .map((x, idC2) => {
                    return (
                        <Grid.Column className="entries-grid" key={ idC2 }>
                            <div className='matrix-input'>
                                <Form.Input className='matrix-input' placeholder='0' onChange={ handleChange(idL2, idC2) }/>
                            </div>
                        </Grid.Column>
                    )
                });
            return ( 
                <Grid.Row className="entries-grid" key={ idL2 }> 
                    { columns }
                </Grid.Row>
            )
        });

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