import React, { useEffect, useState } from 'react'
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table, Button } from 'semantic-ui-react';
import JobAdvetisementService from '../services/jobAdvertisementService'


export default function AllPassiveJobAdvertisemenstList() {
    const [jobAdvertisements, setjobAdvertisement] = useState([])

    useEffect(() => {
      let jobAdvetisementService = new JobAdvetisementService()
      jobAdvetisementService.getAllActiveFalse().then(result=> setjobAdvertisement(result.data.data))

    }, [])

    const activateJobAdvertisement = async(jobAdvertisementId)=>{
      try{
        const jobAdvertisementService = new JobAdvetisementService();
    
        await jobAdvertisementService.jobAdvertisementActivate(jobAdvertisementId)
        jobAdvertisementService.getAllActiveFalse().then(result=> setjobAdvertisement(result.data.data))
    
      }catch(error){
        console.error("ilan Aktif hale getirme işlemi başarısız".error)
      }
     }
    
  return (
    <div>
    
      <Table celled>
        <TableHeader>
          <TableRow>
          <TableHeaderCell>İlan Id</TableHeaderCell>
            <TableHeaderCell>İşveren Id</TableHeaderCell>
            <TableHeaderCell>İşveren Adı</TableHeaderCell>
            <TableHeaderCell>İş Tanımı</TableHeaderCell>
            <TableHeaderCell>Şehir</TableHeaderCell>
            <TableHeaderCell>Açık Pozisyon Adeti</TableHeaderCell>
            <TableHeaderCell>İlan Tarihi</TableHeaderCell>
            <TableHeaderCell>Son Başvuru Tarihi</TableHeaderCell>
            <TableHeaderCell>Çalışma Tipi</TableHeaderCell>
            <TableHeaderCell>Çalışma Zamanı</TableHeaderCell>
            <TableHeaderCell>İlan Durumu</TableHeaderCell>
           
           
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            jobAdvertisements.map((jobAdvertisement) => (
          // Her bir kullanıcı için TableRow oluşturuyoruz.
          // key prop'unu eklememiz React'in listeleri efektif bir şekilde yönetmesine yardımcı olur.
          <TableRow key={jobAdvertisement.jobAdvertisementId}>
            <TableCell>{jobAdvertisement.jobAdvertisementId}</TableCell>
            <TableCell>{jobAdvertisement.employerId}</TableCell>
            <TableCell>{jobAdvertisement.employerName}</TableCell>
            <TableCell>{jobAdvertisement.jobDescriptionName}</TableCell>
            <TableCell>{jobAdvertisement.cityName}</TableCell>
            <TableCell>{jobAdvertisement.numberOfPositions}</TableCell>
            <TableCell>{jobAdvertisement.releaseDate}</TableCell>
            <TableCell>{jobAdvertisement.applicationDeadline}</TableCell>
           <TableCell>{jobAdvertisement.workTypeId}</TableCell>
           <TableCell>{jobAdvertisement.workTimeId}</TableCell>
           <TableCell>{jobAdvertisement.active ? 'Aktif':'Pasif'}</TableCell>
           <TableCell><Button onClick={()=>activateJobAdvertisement(jobAdvertisement.jobAdvertisementId)}>İlanı Onayla</Button></TableCell>
           
            
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
