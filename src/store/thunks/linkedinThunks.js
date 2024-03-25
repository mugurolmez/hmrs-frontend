import LinkedinService from "../../services/linkedinService";
import { addLinkedinError, addLinkedinSucces, getJobSeekerLinkedinError, getJobSeekerLinkedinSuccess } from "../actions/linkedinActions";

export  const addLinkedin=(values)=> async(dispatch)=>{
    try{
        const response=await new LinkedinService().addLinkedin(values)
        dispatch(addLinkedinSucces(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);

    }catch(error){
        dispatch(addLinkedinError)
    }
}
export const getJobSeekerLinkedin=(jobSeekerId)=>async(dispatch)=>{
    try{
        const response=await new LinkedinService().getLinkedinJobSeekerId(jobSeekerId)
        dispatch(getJobSeekerLinkedinSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getJobSeekerLinkedinError(error))
        console.log("linkedin getirme hatası'");
      
    }
}