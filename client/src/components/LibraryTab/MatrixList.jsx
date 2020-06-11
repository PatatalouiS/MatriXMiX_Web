
import React, { useMemo, useState } from 'react';
import { Table, Container, Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const MatrixList = ({ handleSelect }) => {
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const matrixLibrary = useSelector(x => x);

    const handleClick = (index) => {
        setSelectedIndex(index);
        handleSelect(matrixLibrary[index]);
    };

    const rows = useMemo(() => matrixLibrary.map((matrixObj, index) => {
        const { name, matrix } = matrixObj;
        const [ nbL, nbC ] = matrix.size();

        return (
            <Table.Row 
                key={ name } 
                onClick={ () => handleClick(index) }
                className={ selectedIndex === index ? 'row-selected' : '' }>
                <Table.Cell> { name } </Table.Cell>
                <Table.Cell> { nbL } </Table.Cell>
                <Table.Cell> { nbC }</Table.Cell>
            </Table.Row>
        )
    }), [ matrixLibrary, selectedIndex ] );

    return (
        <Container fluid id='library-matrix-table-wrapper'>
            <Table striped unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Lignes</Table.HeaderCell>
                        <Table.HeaderCell>Colonnes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { rows }
                </Table.Body>
            </Table>
        </Container>
    )
}

export default MatrixList;