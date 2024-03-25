import React, { useEffect } from 'react'
import { Divider, Grid, Image, Label } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllImages } from '../store/thunks/imageThunks';

export default function GetAllImages() {
  const dispatch = useDispatch()
  const imageItems = useSelector(state => state.image.imageItems)


  useEffect(() => {
    dispatch(getAllImages())
  }, [dispatch]);

  return (

    <Grid >

      {
        imageItems.map((image) => (

          <div key={image.id} style={{ margin: '0 5px 5px 0', alignItems: 'top' }}>
            <Image src={image.imageUrl} size='medium' verticalAlign='top' />

            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}>
              <Label>id: {image.id}</Label>
              <Label>name: {image.name}</Label>
              <Label>imageurl: {image.imageUrl}</Label>
              <Label>image Id: {image.imageId}</Label>
              <Label>jobseeker Id: {image.job_seeker_id}</Label>
              {/* <Button onClick={() => deleteButton(image.id)} color='red'>Sil</Button> */}
            </div>
            <Divider />
          </div>


        ))
      }
    </Grid>

  )
}
