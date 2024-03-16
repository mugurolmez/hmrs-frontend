import axios from "axios"


export default class WorkExperienceService{
    
async getByJobseekerWorkExperiences(jobSeekerId){
    return await axios.get(`http://localhost:8080/api/workExperiences/${jobSeekerId}`);
}
async addWorkExperience(workExperienceData){
    return await axios.post("http://localhost:8080/api/workExperiences/add",workExperienceData)
}
}
