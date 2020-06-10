
import React from 'react';
import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const MatrixList = ({ handleSelect }) => {
    const matrixLibrary = useSelector(x => x);

    const handleClick = (index) => {
        handleSelect(matrixLibrary[index]);
    }

    return (
        <div id='library-matrix-table-wrapper'>
            <Table striped unstackable id='library-matrix-list' selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Lignes</Table.HeaderCell>
                        <Table.HeaderCell>Colonnes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                    matrixLibrary.map((matrixObj, index) => (
                        <Table.Row key={ index } onClick={ () => handleClick(index) }>
                            <Table.Cell> { matrixObj.name } </Table.Cell>
                            <Table.Cell> { matrixObj.matrix.size()[0] } </Table.Cell>
                            <Table.Cell> { matrixObj.matrix.size()[1] } </Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
        </div>
    )
}

export default MatrixList;