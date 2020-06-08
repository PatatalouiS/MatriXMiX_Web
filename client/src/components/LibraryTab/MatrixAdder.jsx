
import React from 'react';
import { Segment, Form, Divider, Input, Select } from 'semantic-ui-react';
import MatrixEntries from './MatrixEntries';
import { useState } from 'react';

const options = new Array(10)
    .fill(null)
    .map((el, i) => ({  key : i+1, text : String(i+1), value : i+1 }));

const MatrixAdder = () => {

    const [ matrix, setMatrix ] = useState({
        nbLines : 3,
        nbColumns : 3,
        entries : new Array(3).fill(new Array(3).fill(null))
    });

    const setNbLines = (event, { value }) => {
        setMatrix((prev) => {
            const newObj = { ...prev };
            const diff = Math.abs(value - prev.nbLines);
            const lastLength = prev.entries.length;

            if(value < prev.nbLines) {
                newObj.entries.splice(lastLength - diff, lastLength);
            }
            else {
                for(let i = 0; i < diff ; ++i) {
                    newObj.entries.push(new Array(prev.nbColumns).fill(null));
                }
            }

            return {
                ...newObj,
                nbLines : value
            };
        });
    };

    const setNbColumns = (event, { value }) => {
        setMatrix((prev) => {
            const newObj = { ...prev };
            const diff = Math.abs(value - prev.nbColumns);
            const lastLength = prev.nbColumns;

            if(value < prev.nbColumns) {
                for(let i = 0; i < prev.nbLines ; ++i) {
                    newObj.entries[i].splice(lastLength - diff, lastLength);
                }
            }
            else {
                for(let i = 0; i < prev.nbLines ; ++i) {
                    for(let j = 0; j < diff; j++) {
                        newObj.entries[i].push(null);
                    }
                }
            }

            return {
                ...newObj,
                nbColumns : value
            }
        })
    };

    return (
        <Segment>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        label='Nom Matrice'/>
                    <Form.Select
                        label='Nb Lignes' 
                        options={ options }
                        value={ matrix.nbLines } 
                        text={ String(matrix.nbLines) }
                        onChange={ setNbLines }/>
                    <Form.Select 
                        label='Nb Colonnes' 
                        value={ matrix.nbColumns } 
                        text={ String(matrix.nbColumns) }
                        options={ options }
                        onChange={ setNbColumns }/>
                </Form.Group>

                <Divider/>

                <MatrixEntries matrix={ matrix } />
            </Form>
        </Segment>
    )
};

export default MatrixAdder;