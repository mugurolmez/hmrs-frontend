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
            .catch(error => {
                console.error(error)
            })
    }
    async addImage(jobSeekerId, file) {
        const formData = new FormData()
        formData.append('jobSeeekerId', jobSeekerId);
        formData.append('image', file)

        try {
            const response = await axios.post(`http://localhost:8080/image/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('image added successfully', response.data)

                }catch(error) {
                    console.error('Error Adding image',error)
                }
            }
    
        }