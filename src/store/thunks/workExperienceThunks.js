import WorkExperienceService from "../../services/workExperienceService"
import { addWorkExperienceError, addWorkExperienceSucces } from "../actions/workExperienceActions"




export const addWorkExperience=(values)=>async(dispatch)=>{
    try{
        const response=await new WorkExperienceService().addWorkExperience(values)
        dispatch(addWorkExperienceSucces(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addWorkExperienceError(error))
    }
}