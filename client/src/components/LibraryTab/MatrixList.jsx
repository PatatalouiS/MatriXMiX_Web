
import React from 'react';
import { Table } from 'semantic-ui-react';

const MatrixList = () => {
    return (
        <Table striped unstackable id='library-matrix-list'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>Lignes</Table.HeaderCell>
                        <Table.HeaderCell>Colonnes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    <Table.Row>
                        <Table.Cell> A </Table.Cell>
                        <Table.Cell> 3 </Table.Cell>
                        <Table.Cell> 3 </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
    )
}

export default MatrixList;