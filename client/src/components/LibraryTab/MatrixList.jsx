
import React, { useMemo, useState, useCallback } from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMatrix } from '../../utils/store';

const MatrixList = ({ handleSelect = () => {}, remove = false }) => {
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const matrixLibrary                       = useSelector(x => x);
    const dispatch                            = useDispatch();

    const handleClick = useCallback((index) => {
        setSelectedIndex(index);
        handleSelect(matrixLibrary[index]);
    }, [ handleSelect, matrixLibrary ]);

    const handleRemove = useCallback((index) => (event) => {
        event.stopPropagation();
        setSelectedIndex(0);
        handleSelect(null);
        dispatch(deleteMatrix(matrixLibrary.find((matrixObj, i) => {
            return index === i;
        })));
    }, [ handleSelect, matrixLibrary, dispatch ]);

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
                {
                    remove && 
                        <Table.Cell textAlign='right' className='trash-btn-cell'> 
                            <Button className='trash-btn'
                                icon={ <Icon name='trash' color='red'/> }
                                onClick={ handleRemove(index) }/>
                        </Table.Cell>
                }
            </Table.Row>
        )
    }), [ matrixLibrary, selectedIndex, handleClick, handleRemove, remove] );

    return (
        <div id='library-matrix-table-wrapper'>
            <Table unstackable id='library-matrix-table-header'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Nom </Table.HeaderCell>
                        <Table.HeaderCell> Lignes </Table.HeaderCell>
                        <Table.HeaderCell> Colonnes </Table.HeaderCell>
                        {
                            remove && 
                                <Table.HeaderCell textAlign='right'> 
                                    <Icon name='trash'/>
                                </Table.HeaderCell>
                        }
                    </Table.Row>
                </Table.Header>
            </Table>

            <div id='library-matrix-table-body-wrapper'> 
                <Table 
                    striped 
                    unstackable 
                    selectable
                    id='library-matrix-table-body'>
                    <Table.Body>
                        { rows }
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default MatrixList;
