import axios from "axios"

export default class WorkExperinceService{
getWorkExperince(jobSeekerId){
    return axios.get(`http://localhost:8080/api/workExperinces/${jobSeekerId}`);
}
addWorkExperince(workExperinceData){
    return axios.post("http://localhost:8080/api/workExperinces/add",workExperinceData)
}
}
