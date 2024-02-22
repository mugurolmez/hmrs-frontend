import React, { useEffect, useState } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import WorkTimeService from '../services/workTimeService';


function WorkTimeGetAllList() {
    const [workTimes, setWorkTimes] = useState([]);

    useEffect(() => {

        let workTimeService = new WorkTimeService();
        workTimeService.getAAllWorkTime().then(result => setWorkTimes(result.data.data));
    }, []);


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
                        workTimes.map((workTime) => (
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