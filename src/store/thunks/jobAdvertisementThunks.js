import JobAdvetisementService from "../../services/jobAdvertisementService"
import { AddJobAdverisementError, AddJobAdverisementSuccess } from "../actions/jobAdvertisementActions"






export const AddJobAdvertisement=(values)=>{
    
     return async (dispatch)=>{
        try{
            const response=await new JobAdvetisementService().addJobAdvertisement(values)
            dispatch(AddJobAdverisementSuccess(response.data))
            console.log(response.data.message)
            console.log(response.data.success)
        }catch(error){

            dispatch(AddJobAdverisementError(error))
            console.log('kayıt hatası', error)
        }
     }


}