import axios from "axios"

export default class FrameworkService{

getFrameworkJobSeekerId(jobSeekerId){
    return axios.get(`http://localhost:8080/api/frameworks/${jobSeekerId}`)
}

addFramework(frameworkData){
   
    return axios.post("http://localhost:8080/api/frameworks/add",frameworkData)
}
}
