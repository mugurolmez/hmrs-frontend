import axios from "axios"

export default class JobDescriptionService {
    addJobDescription(jobDescriptionData) {
        return axios.post("http://localhost:8080/api/jobDescriptions/add", jobDescriptionData)
    }
    getAllJobDescritions() {
        return axios.get("http://localhost:8080/api/jobDescriptions/getall");
    }
    getJobDescriptionById(jobDescriptionId) {
        return axios.get(`http://localhost:8080/api/jobDescriptions/${jobDescriptionId}`);
    }

}