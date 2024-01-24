import React, { useEffect,useState } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import HrmsPersonService from '../services/hrmsPersonService';

export default function HrmsPersonList() {

  const [hrmsPersons, setHrmsPersons] = useState([]);

  useEffect(() => {
    let hrmsPersonService = new HrmsPersonService();
        hrmsPersonService.getHrmsPersons().then(result=>setHrmsPersons(result.data.data));},[]);
  
    return (

      <div>
       
       <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kullanıcı Id</TableHeaderCell>
            <TableHeaderCell>Personel Id</TableHeaderCell>
            <TableHeaderCell>Hrms Personel Id</TableHeaderCell>
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
            hrmsPersons.map((hrmsperson) => (
              // Her bir kullanıcı için TableRow oluşturuyoruz.
              // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
              <TableRow key={hrmsperson.hrmsPersonId}>
                <TableCell>{hrmsperson.userId}</TableCell>
                <TableCell>{hrmsperson.personId}</TableCell>
                <TableCell>{hrmsperson.hrmsPersonId}</TableCell>
                <TableCell>{hrmsperson.email}</TableCell>
                <TableCell>{hrmsperson.password}</TableCell>
                <TableCell>{hrmsperson.name}</TableCell>
                <TableCell>{hrmsperson.lastName}</TableCell>
                <TableCell>{hrmsperson.birthDate}</TableCell>
                <TableCell>{hrmsperson.nationalyNumber}</TableCell>
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