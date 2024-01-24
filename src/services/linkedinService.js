import axios from "axios"

export default class LinkedinService {
    AddLinkedin(linkedinData) {
        return axios.post("http://localhost:8080/api/linkedin-address/add", linkedinData)
    }
  
    getLinkedinJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/linkedin-address/${jobSeekerId}`);
    }

}