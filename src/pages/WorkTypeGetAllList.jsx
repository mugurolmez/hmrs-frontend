import React, { useEffect, useState } from 'react'
import WorkTypeService from '../services/workTypeService';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';


function WorkTypeGetAllList() {
    const [workTypes, setWorkTypes] = useState([]);

    useEffect(() => {

        let workTypeService = new WorkTypeService();
        workTypeService.getAllWorkType().then(result => setWorkTypes(result.data.data));
    }, []); // useEffect'in sadece bir kere çalışması için boş dependency array kullanıyoruz.


    return (
        <div>

            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Çalışma Tipi ID</TableHeaderCell>
                        <TableHeaderCell>Çalışma Tipi</TableHeaderCell>
                     
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        workTypes.map((workType) => (
                            // Her bir kullanıcı için TableRow oluşturuyoruz.
                            // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
                            <TableRow key={workType.workTypeId}>
                                <TableCell>{workType.workTypeId}</TableCell>
                                <TableCell>{workType.workTypeName}</TableCell>
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

export default WorkTypeGetAllList