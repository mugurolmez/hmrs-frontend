import React, { useEffect, useState } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import ImageService from '../services/imageService';

export default function ImagesList() {
  // Kullanıcıları depolamak için bir state kullanıyoruz.
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Component yüklendiğinde yapılması gereken işlemler burada yer alır.
    
    // userService.getUsers() ile kullanıcı verilerini çekiyoruz.
    // then bloğunda gelen veriyi setUsers ile state'e atıyoruz.
    let imageService = new ImageService();
    imageService.getImages().then(result => setImages(result.data));}, []); // useEffect'in sadece bir kere çalışması için boş dependency array kullanıyoruz.

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

        <TableBody>
          {
            images.map((image) => (
              // Her bir kullanıcı için TableRow oluşturuyoruz.
              // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
              <TableRow key={image.id}>
                <TableCell>{image.id}</TableCell>
                <TableCell>{image.jobSeekerId}</TableCell>
                <TableCell>{image.name}</TableCell>
                <TableCell>{image.id}</TableCell>
                <TableCell>{image.imageId}</TableCell>
            
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
