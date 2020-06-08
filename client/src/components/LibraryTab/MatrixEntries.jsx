
import React, { useState } from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';

const MatrixEntries = ({ matrix }) => {

    console.log("reloaded", matrix);

    return (
        <>
            <Header size='small'> Saisie des valeurs </Header>
            <Grid columns='equal' className="entries-grid">
                { 
                    matrix.entries.map((line, idL) => {
                        return ( 
                            <Grid.Row className="entries-grid" key={ idL }>        
                            {
                                line.map((value, idC) => (
                                    <Grid.Column className="entries-grid" key={ idC + idL }>
                                        <div className='matrix-input'>
                                            <Form.Input  className='matrix-input'/>
                                        </div>
                                    </Grid.Column>
                                ))
                            }
                            </Grid.Row>
                        )  
                    })
                }
            </Grid>
        </>
    );
};


export default MatrixEntries;