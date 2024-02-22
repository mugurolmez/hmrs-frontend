import React, { useEffect,useState } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import PersonService from '../services/personService';

export default function PersonList() {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    let personService = new PersonService();
    personService.getPersons().then(result => setPersons(result.data.data));}, []);
   
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
            persons.map((person) => (
              // Her bir kullanıcı için TableRow oluşturuyoruz.
              // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
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