import TemporaryEmployerService from "../../services/temporaryEmployerService"
import { addTemporaryEmployerSuccess } from "../actions/temporaryEmployerActions"


export const addTemporaryEmployer=(values)=>async(dispatch)=>{
    try{
        const response= await new TemporaryEmployerService().addTemporaryEployer(values)
        dispatch(addTemporaryEmployerSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addTemporaryEmployer(error))
    }
}

export const setTemporaryEmployer=()=>async(dispatch)=>{
    let response
    try{
         response= await new TemporaryEmployerService().getAllTemporaryEployers()
        dispatch(setTemporaryEmployer(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }
}