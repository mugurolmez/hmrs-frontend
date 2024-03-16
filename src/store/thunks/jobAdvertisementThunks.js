import JobAdvetisementService from "../../services/jobAdvertisementService"
import { addJobAdverisementError, addJobAdverisementSuccess, getAllActiveJobAdvertisementError, getAllActiveJobAdvertisementSuccess, getAllPassiveJobAdvertisementError, getAllPassiveJobAdvertisementSuccess } from "../actions/jobAdvertisementActions"


export const addJobAdvertisement = (values) => {

    return async (dispatch) => {
        try {
            const response = await new JobAdvetisementService().addJobAdvertisement(values)
            dispatch(addJobAdverisementSuccess(response.data))
            console.log(response.data.message)
            console.log(response.data.success)
        } catch (error) {

            dispatch(addJobAdverisementError(error))
            console.log('kayıt hatası', error)
        }
    }
}

export const getAllActiveJobAdvertisement=()=>async(dispatch)=>{
    try{
        const response=await new JobAdvetisementService().getAllActiveTrue()
        dispatch(getAllActiveJobAdvertisementSuccess(response.data.data))
        console.log(response.data.data)
        console.log(response.data.message)
        console.log(response.data.success)
    }catch(error){
        dispatch(getAllActiveJobAdvertisementError(error))
    }
}

export const getAllPassiveJobAdvertisement=()=>async(dispatch)=>{
    try{
        const response=await new JobAdvetisementService().getAllActiveFalse()
        dispatch(getAllPassiveJobAdvertisementSuccess(response.data.data))
        console.log(response.data.message)
        console.log(response.data.success)
    }catch(error){
        dispatch(getAllPassiveJobAdvertisementError(error))
    }
}