import React, { useEffect } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkTimes } from '../store/thunks/workTimeThunks';


function WorkTimeGetAllList() {
    const dispatch = useDispatch()
    const workTimesData = useSelector((state) => state.workTime.workTimeItems)

    useEffect(() => {
        dispatch(fetchWorkTimes())

    }, [dispatch]);

    return (
        <div>

            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Çalışma Zamanı ID</TableHeaderCell>
                        <TableHeaderCell>Çalışma Zamanı</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        workTimesData.map((workTime) => (
                            <TableRow key={workTime.workTimeId}>
                                <TableCell>{workTime.workTimeId}</TableCell>
                                <TableCell>{workTime.workTimeName}</TableCell>
                            </TableRow>
                        ))

                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableHeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron left' />
                                </MenuItem>
                                <MenuItem as='a'>1</MenuItem>
                                <MenuItem as='a'>2</MenuItem>
                                <MenuItem as='a'>3</MenuItem>
                                <MenuItem as='a'>4</MenuItem>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron right' />
                                </MenuItem>
                            </Menu>
                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default WorkTimeGetAllList