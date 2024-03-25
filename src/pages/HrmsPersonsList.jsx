import React, { useEffect } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHrmsPersons } from '../store/thunks/hrmsPersonThunks';

export default function HrmsPersonsList() {
  const dispatch=useDispatch()
  const hrmsPersonItems=useSelector(state=>state.hrmsPerson.hrmsPersonItems)

  useEffect(() => {
   dispatch(getAllHrmsPersons())
  }, [dispatch]);

  
    return (

      <div>
             {hrmsPersonItems && (
       <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kullanıcı ID</TableHeaderCell>
            <TableHeaderCell>Personel ID</TableHeaderCell>
            <TableHeaderCell>Hrms Personel ID</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Parola</TableHeaderCell>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Soyadı</TableHeaderCell>
            <TableHeaderCell>Doğum Tarihi</TableHeaderCell>
            <TableHeaderCell>Tc Kimlik No</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            hrmsPersonItems.map((hrmsperson) => (
              <TableRow key={hrmsperson.hrmsPersonId}>
                <TableCell>{hrmsperson.userId}</TableCell>
                <TableCell>{hrmsperson.personId}</TableCell>
                <TableCell>{hrmsperson.hrmsPersonId}</TableCell>
                <TableCell>{hrmsperson.email}</TableCell>
                <TableCell>{hrmsperson.password}</TableCell>
                <TableCell>{hrmsperson.name}</TableCell>
                <TableCell>{hrmsperson.lastName}</TableCell>
                <TableCell>{hrmsperson.birthDate}</TableCell>
                <TableCell>{hrmsperson.nationalityNumber}</TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter >
          <TableRow >
            <TableHeaderCell colSpan='9'>
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
  
             )}
      </div>
    )

}