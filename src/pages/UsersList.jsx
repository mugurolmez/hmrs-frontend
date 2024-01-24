import React, { useEffect, useState } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import UserService from '../services/userService.js';

export default function UserList() {
  // Kullanıcıları depolamak için bir state kullanıyoruz.
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Component yüklendiğinde yapılması gereken işlemler burada yer alır.
    
    // userService.getUsers() ile kullanıcı verilerini çekiyoruz.
    // then bloğunda gelen veriyi setUsers ile state'e atıyoruz.
    let userService = new UserService();
    userService.getUsers().then(result => setUsers(result.data.data));}, []); // useEffect'in sadece bir kere çalışması için boş dependency array kullanıyoruz.

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Şifre</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            users.map((user) => (
              // Her bir kullanıcı için TableRow oluşturuyoruz.
              // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
              <TableRow key={user.UserId}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
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
  );
}
