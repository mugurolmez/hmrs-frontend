import TemporaryEmployerService from "../../services/temporaryEmployerService"
import { addTemporaryEmployerError, addTemporaryEmployerSuccess, getAllTemporaryEmployerError, getAllTemporaryEmployerSuccess } from "../actions/temporaryEmployerActions"


export const addTemporaryEmployer=(values)=>async(dispatch)=>{
    let response
    try{
         response= await new TemporaryEmployerService().addTemporaryEployer(values)
        dispatch(addTemporaryEmployerSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);


    }catch(error){
        dispatch(addTemporaryEmployerError(error))
    }
}

export const getAllTemporaryEployers=()=>async(dispatch)=>{
    let response
    try{
         response= await new TemporaryEmployerService().getAllTemporaryEployers()
        dispatch(getAllTemporaryEmployerSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getAllTemporaryEmployerError(error))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }
}