import React, { useEffect } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployers } from '../store/thunks/employerThunks';


export default function EmployerList() {
  const dispatch=useDispatch()
  const employers= useSelector((state)=>state.employer.employerItems)

  useEffect(() => {
    dispatch(setEmployers())
  }, [dispatch]); 

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
            <TableHeaderCell>Telefon Numarası</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            employers.map((employer) => (
          // Her bir kullanıcı için TableRow oluşturuyoruz.
          // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
          <TableRow key={employer.employerId}>
            <TableCell>{employer.userId}</TableCell>
            <TableCell>{employer.employerId}</TableCell>
            <TableCell>{employer.email}</TableCell>
            <TableCell>{employer.password}</TableCell>
            <TableCell>{employer.corporateName}</TableCell>
            <TableCell>{employer.webSite}</TableCell>
            <TableCell>{employer.phoneNumber}</TableCell>
          </TableRow>
          ))

            }
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan='7'>
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
