import React, { useEffect } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../store/thunks/userThunks.js';

export default function UserList() {
  const dispatch = useDispatch()
  const userItems = useSelector(state => state.user.userItems)

  useEffect(() => {
    dispatch(getAllUser())
  }, [dispatch]);


  return (
    <div>
        
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kullanıcı ID</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Şifre</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            userItems.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
              </TableRow>
            )) }
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
