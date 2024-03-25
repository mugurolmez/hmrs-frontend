import ImageService from "../../services/imageService"
import { addImageError, addImageSuccess, getAllImagesError, getAllImagesSuccess } from "../actions/imageActions"





export const getAllImages = () => {
    return async (dispatch) => {
        try {
            let response = await new ImageService().getAllimages()
            dispatch(getAllImagesSuccess(response.data.data))
            console.log(response.data.message)
            console.log(response.data.success)
        } catch (error) {
            dispatch(getAllImagesError(error))
            console.log('Resimleri Getirme Hatası')
        }
    }
}

export const addImage = (values) => {
    return async (dispatch) => {
        try {
            const response=await new ImageService().addImage(values) 
            console.log('data:',response.data.data)
            dispatch(addImageSuccess(response.data.data))
           

            }catch (error) {
            dispatch(addImageError(error));
            console.error('Resim Ekleme Hatası:', error.message);
            console.log('values: ',values)
            if (error.response && error.response.data && error.response.data.message) {
                console.error('API Hata Mesajı:', error.response.data.message);
            }

           
        } 
        }
    };




