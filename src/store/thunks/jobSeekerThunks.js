import JobSeekerService from "../../services/jobSeekerService"
import { addJobseekerError, addJobseekerSuccess, setJobSeekers } from "../actions/jobSeekerActions"


export const addJobSeeker=(values)=>async(dispatch)=>{
try{
    const response= await new JobSeekerService().AddJobSeeker(values)
    dispatch(addJobseekerSuccess(values))
    console.log("API Yanıtı - Başarı:", response.data.success);
    console.log("API Yanıtı - Mesaj:", response.data.message);

}catch(error){
    dispatch(addJobseekerError(error))
}
}


export const fetchJobSeekers=()=>async(dispatch)=>{
    try{
        const response=await new JobSeekerService().getAllJobSeekers()
        dispatch(setJobSeekers(response.data.data))
        console.log(response.data)
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        console.log('iş arayan getirme hatası',error)
    }
}

