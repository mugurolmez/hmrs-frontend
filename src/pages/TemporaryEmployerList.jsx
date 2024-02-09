import React, { useEffect, useState } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table, Button } from 'semantic-ui-react';
import TemporaryEmployerService from '../services/temporaryEmployerService';


export default function TemporaryEmployerList() {
  // Kullanıcıları depolamak için bir state kullanıyoruz.
  const [temporaryEmployers, setTemporaryEmployers] = useState([]);

  useEffect(() => {
    // Component yüklendiğinde yapılması gereken işlemler burada yer alır.

    // userService.getUsers() ile kullanıcı verilerini çekiyoruz.
    // then bloğunda gelen veriyi setUsers ile state'e atıyoruz.
    let temporaryEmployerService = new TemporaryEmployerService();
    temporaryEmployerService.getTemporaryEployers().then(result => setTemporaryEmployers(result.data.data));
  }, []); // useEffect'in sadece bir kere çalışması için boş dependency array kullanıyoruz.

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kullanıcı Id</TableHeaderCell>
            <TableHeaderCell>İş Veren Id</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Password</TableHeaderCell>
            <TableHeaderCell>Şirket Adı</TableHeaderCell>
            <TableHeaderCell>Web Adresi</TableHeaderCell>
            <TableHeaderCell>Telefon nu</TableHeaderCell>
            <TableHeaderCell> Onay Durumu</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            temporaryEmployers.map((temporaryEmployer) => (
          // Her bir kullanıcı için TableRow oluşturuyoruz.
          // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
          <TableRow key={temporaryEmployer.employerId}>
            <TableCell>{temporaryEmployer.userId}</TableCell>
            <TableCell>{temporaryEmployer.employerId}</TableCell>
            <TableCell>{temporaryEmployer.email}</TableCell>
            <TableCell>{temporaryEmployer.password}</TableCell>
            <TableCell>{temporaryEmployer.corporateName}</TableCell>
            <TableCell>{temporaryEmployer.webSite}</TableCell>
            <TableCell>{temporaryEmployer.phoneNumber}</TableCell>
            <TableCell> <span style={{ color: temporaryEmployer.approvalStatus ? 'green' : 'red' }}>&bull;</span></TableCell>
            <TableCell><Button>Onayla</Button></TableCell>
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
