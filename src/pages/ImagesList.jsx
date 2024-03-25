import React, { useEffect } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllImages } from '../store/thunks/imageThunks';

export default function ImagesList() {
  const dispatch = useDispatch()
  const imageItems = useSelector(state => state.image.imageItems)


  useEffect(() => {
    dispatch(getAllImages())
  }, [dispatch]);

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>İş Ayaran Id</TableHeaderCell>
            <TableHeaderCell>Adı</TableHeaderCell>
            <TableHeaderCell>Resim Id</TableHeaderCell>
            <TableHeaderCell>Resim Adresi</TableHeaderCell>
          </TableRow>
        </TableHeader>

        {imageItems && (
          <TableBody>
            {
              imageItems.map((image) => (
                <TableRow key={image.id}>
                  <TableCell>{image.id}</TableCell>
                  <TableCell>{image.job_seeker_id}</TableCell>
                  <TableCell>{image.name}</TableCell>
                  <TableCell>{image.id}</TableCell>
                  <TableCell>{image.imageId}</TableCell>

                </TableRow>
              ))

            }
          </TableBody>
        )}
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
