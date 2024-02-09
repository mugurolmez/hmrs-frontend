import React, { useEffect, useState } from 'react'
import { Button, Divider, Grid, Image, Label } from 'semantic-ui-react'
import ImageService from '../services/imageService';

export default function ImageGetAllImages() {


  const [images, setImages] = useState([]);

  useEffect(() => {
    let imageService = new ImageService();
    imageService.imagesGetAll().then(result => setImages(result.data.data));
  }, []); // useEffect'in sadece bir kere çalışması için boş dependency array kullanıyoruz.

    let deleteButton= (id)=>{
        console.log(id)
        let imageService=new ImageService()
         imageService.oneImageDelete(id)
        console.log("delete buton tıklandı")
        
        console.log()
    }
  

  
  return (


    <Grid >

      {
        images.map((image) => (

          <div key={image.id} style={{ margin: '0 5px 5px 0', alignItems: 'top' }}>
            <Image src={image.imageUrl} size='medium' verticalAlign='top' />

            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
            <Label>id: {image.id}</Label>
              <Label>name: {image.name}</Label>
              <Label>imageurl: {image.imageUrl}</Label>
              <Label>image Id: {image.imageId}</Label>
              <Label>jobseeker Id: {image.job_seeker_id}</Label>
              <Button onClick={()=>deleteButton(image.id )} color='red'>Sil</Button>
            </div>
            <Divider />
          </div>


        ))
      }
    </Grid>

  )
}
