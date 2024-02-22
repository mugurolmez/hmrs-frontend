import React, { useEffect, useState } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import JobDescriptionService from '../services/jobDescriptionService';


export default function GetAllJobDescriptions() {
  // Kullanıcıları depolamak için bir state kullanıyoruz.
  const [jobDescriptions, setJobDescriptions] = useState([]);

  useEffect(() => {
    // Component yüklendiğinde yapılması gereken işlemler burada yer alır.

    // userService.getUsers() ile kullanıcı verilerini çekiyoruz.
    // then bloğunda gelen veriyi setUsers ile state'e atıyoruz.
    let jobDescriptionService = new JobDescriptionService();
    jobDescriptionService.getAllJobDescritions().then(result => setJobDescriptions(result.data.data));
  }, []); // useEffect'in sadece bir kere çalışması için boş dependency array kullanıyoruz.

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>İş Tanımı ID</TableHeaderCell>
            <TableHeaderCell>İş Tanımı</TableHeaderCell>
            
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            jobDescriptions.map((jobDescription) => (
          // Her bir kullanıcı için TableRow oluşturuyoruz.
          // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
          <TableRow key={jobDescription.jobDescriptionId}>
            <TableCell>{jobDescription.jobDescriptionId}</TableCell>
            <TableCell>{jobDescription.jobDescriptionName}</TableCell>
   
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
