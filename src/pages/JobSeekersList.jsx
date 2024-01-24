import React, { useEffect,useState } from 'react'
import JobSeekerService from '../services/jobSeekerService';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';

export default function JobSeekerList() {

  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getJobSeekers().then(result => setJobSeekers(result.data.data));}, []);
   
    return (

      <div>
       
       <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kullanıcı Id</TableHeaderCell>
            <TableHeaderCell>Personel Id</TableHeaderCell>
            <TableHeaderCell>İş Arayan Id</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Tc Kimlik No</TableHeaderCell>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Soyadı</TableHeaderCell>
            <TableHeaderCell>Doğum Tarihi</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            jobSeekers.map((jobSeeker) => (
              // Her bir kullanıcı için TableRow oluşturuyoruz.
              // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
              <TableRow key={jobSeeker.jobSeekerId}>
                <TableCell>{jobSeeker.userId}</TableCell>
                <TableCell>{jobSeeker.personId}</TableCell>
                <TableCell>{jobSeeker.jobSeekerId}</TableCell>
                <TableCell>{jobSeeker.email}</TableCell>
                <TableCell>{jobSeeker.nationalityNumber}</TableCell>
                <TableCell>{jobSeeker.name}</TableCell>
                <TableCell>{jobSeeker.lastName}</TableCell>
                <TableCell>{jobSeeker.birthDate}</TableCell>
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