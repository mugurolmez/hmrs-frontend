import React, { useEffect } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useSelector,useDispatch } from 'react-redux';
import { getAllPersons } from '../store/thunks/personThunks';
export default function PersonList() {

  const dispatch=useDispatch()
  const personItems = useSelector((state) => state.person.personItems)

  useEffect(() => {
  dispatch(getAllPersons())

  }, [dispatch]);

  return (

    <div>

      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kişi ID</TableHeaderCell>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Soyadı</TableHeaderCell>
            <TableHeaderCell>Dogum Tarihi</TableHeaderCell>
            <TableHeaderCell>Tc Kimlik No</TableHeaderCell>
            <TableHeaderCell>Kullanıcı ID</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Parola</TableHeaderCell>
          </TableRow>
        </TableHeader>


        <TableBody>
          {
            personItems.map((person) => (
              <TableRow key={person.personId}>
                <TableCell>{person.personId}</TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.lastName}</TableCell>
                <TableCell>{person.birthDate}</TableCell>
                <TableCell>{person.nationalityNumber}</TableCell>
                <TableCell>{person.userId}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.password}</TableCell>

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