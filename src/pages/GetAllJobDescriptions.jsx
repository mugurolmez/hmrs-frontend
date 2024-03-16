import React, { useEffect } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllJobDescriptions } from '../store/thunks/jobDescriptionThunks';


export default function GetAllJobDescriptions() {
  const dispacth = useDispatch()
  const jobDescriptions = useSelector((state) => state.jobDescription.jobDescriptionItems)

  useEffect(() => {
    dispacth(getAllJobDescriptions());
  }, [dispacth]);

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
          {jobDescriptions && jobDescriptions.length > 0 &&
            jobDescriptions.map((jobDescription) => (
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
