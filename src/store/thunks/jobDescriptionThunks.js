import JobDescriptionService from "../../services/jobDescriptionService";
import { addJobDescriptionsError, addJobDescriptionsSuccess, getAllJobDescriptionsError, getAllJobDescriptionsSuccess, getJobDescriptionByIdError, getJobDescriptionByIdSuccess } from "../actions/jobDescriptionActions";


export const getJobDescriptionById=(jobDescriptionId)=>async (dispatch)=>{
    try{
        const response=await new JobDescriptionService().getJobDescriptionById(jobDescriptionId)
        dispatch(getJobDescriptionByIdSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.data);
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getJobDescriptionByIdError(error))
        console.error('İş Tanımları alma hatası',error)
    }
}

export const getAllJobDescriptions =()=> async (dispatch)=>{
    try{
        const response = await new JobDescriptionService().getAllJobDescritions()
        dispatch(getAllJobDescriptionsSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getAllJobDescriptionsError(error))
        console.error('İş Tanımları alma hatası',error)
    }
}

export const addJobDescription =(values)=> async (dispatch)=>{
    try{
        const response = await new JobDescriptionService().addJobDescription(values)
        dispatch(addJobDescriptionsSuccess(values))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addJobDescriptionsError(error))
        
    }
}