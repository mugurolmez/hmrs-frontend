import React, { useEffect } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActiveJobAdvertisement } from '../store/thunks/jobAdvertisementThunks';


export default function AllActiveJobAdvertisemenstList() {
  const dispacth = useDispatch()
  const jobAdvertisements = useSelector((state) => state.jobAdvertisement.jobAdvertisementItems)

  useEffect(() => {
    dispacth(getAllActiveJobAdvertisement())
  }, [dispacth])

  return (
    <div  >
      {jobAdvertisements.length === 0 ? (
      <p>Aktif İş İlanı Yok.</p>
    ) :
      <Table unstackable celled >
        <TableHeader>
          <TableRow>
            <TableHeaderCell>İş İlanı No</TableHeaderCell>
            <TableHeaderCell>İş Veren Adı</TableHeaderCell>
            <TableHeaderCell >İlan Açılış Tarihi </TableHeaderCell>
            <TableHeaderCell>İlan Bitiş Tarihi</TableHeaderCell>
            <TableHeaderCell>Şehir Adı</TableHeaderCell>
            <TableHeaderCell>İş Tanımı</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Çalışma Tipi</TableHeaderCell>
            <TableHeaderCell>Çalışma Zamanı</TableHeaderCell>
            <TableHeaderCell>Açık Pozisyon Adeti</TableHeaderCell>
            <TableHeaderCell>Minimum Maaş</TableHeaderCell>
            <TableHeaderCell>Maksimum Maaş</TableHeaderCell>
            <TableHeaderCell>İlan Durumu</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
          
            jobAdvertisements.map((jobAdvertisement) => (
              <TableRow key={jobAdvertisement.jobAdvertisementId}>
                <TableCell>{jobAdvertisement.jobAdvertisementId}</TableCell>
                <TableCell>{jobAdvertisement.employerName}</TableCell>
                <TableCell>{jobAdvertisement.releaseDate}</TableCell>
                <TableCell>{jobAdvertisement.applicationDeadline}</TableCell>
                <TableCell>{jobAdvertisement.cityName}</TableCell>
                <TableCell>{jobAdvertisement.jobDescriptionName}</TableCell>
                <TableCell>{jobAdvertisement.jobDescriptionFeatures}</TableCell>
                <TableCell>{jobAdvertisement.workTypeName}</TableCell>
                <TableCell>{jobAdvertisement.workTimeName}</TableCell>
                <TableCell>{jobAdvertisement.numberOfPositions}</TableCell>
                <TableCell>{jobAdvertisement.minSalary}</TableCell>
                <TableCell>{jobAdvertisement.maxSalary}</TableCell>
                <TableCell>{jobAdvertisement.active ? 'Aktif' : 'Pasif'}</TableCell>
                <TableCell><Button>Pasif Yap</Button></TableCell>
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

}
    </div>
  )
}
