import JobDescriptionService from "../../services/jobDescriptionService";
import { AddJobDescriptionsError, AddJobDescriptionsSuccess, setJobDescriptions } from "../actions/jobDescriptionActions";


export const fetchJobDescriptions =()=> async (dispatch)=>{
    try{
        const response = await new JobDescriptionService().getAllJobDescritions()
        dispatch(setJobDescriptions(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        console.error('İş Tanımları alma hatası',error)
    }
}
export const AddJobDescriptions =(values)=> async (dispatch)=>{
    try{
        const response = await new JobDescriptionService().addJobDescription(values)
        dispatch(AddJobDescriptionsSuccess(values))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(AddJobDescriptionsError(error))
        
    }
}