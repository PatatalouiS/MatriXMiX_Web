
import React, { useMemo, useState, useCallback } from 'react';
import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const MatrixList = ({ handleSelect }) => {
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const matrixLibrary = useSelector(x => x);

    const handleClick = useCallback((index) => {
        setSelectedIndex(index);
        handleSelect(matrixLibrary[index]);
    }, [ handleSelect, matrixLibrary ]);

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
    }), [ matrixLibrary, selectedIndex, handleClick ] );

    return (
        <div id='library-matrix-table-wrapper'>
            <Table unstackable id='library-matrix-table-header'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Lignes</Table.HeaderCell>
                        <Table.HeaderCell>Colonnes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>

            <div id='library-matrix-table-body-wrapper'> 
                <Table striped unstackable id='library-matrix-table-body'>
                    <Table.Body>
                        { rows }
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default MatrixList;