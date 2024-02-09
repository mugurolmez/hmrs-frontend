import axios from "axios"

export default class ImageService {
   
    imagesGetAll() {
        return axios.get("http://localhost:8080/image/getAllImagesResponse");
    }
   async oneImageDelete(id) {
        await axios.delete(`http://localhost:8080/image/delete/${id}`)
        .then(response => {
          console.log(`Deleted post with ID ${id}`);
        })
        .catch(error=>{
            console.error(error)
        })
    }


}