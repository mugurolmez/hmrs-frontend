import WorkExperienceService from "../../services/workExperienceService"
import { addWorkExperienceError, addWorkExperienceSuccess, getJobSeekerWorkexperiencesError, getJobSeekerWorkexperiencesSuccess } from "../actions/workExperienceActions"




export const addWorkExperience=(values)=>async(dispatch)=>{
    try{
        const response=await new WorkExperienceService().addWorkExperience(values)
        dispatch(addWorkExperienceSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addWorkExperienceError(error))
    }
}

export const getJobSeekerWorkExperiences=(jobSeekerId)=>async(dispatch)=>{
    try{
        const response=await new WorkExperienceService().getByJobseekerWorkExperiences(jobSeekerId)
        dispatch(getJobSeekerWorkexperiencesSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getJobSeekerWorkexperiencesError(error))
        console.log('okul getirme hatası')
    }
}