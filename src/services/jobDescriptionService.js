import axios from "axios"

export default class JobDescriptionService {
    addJobDescriptionService(jobDescriptionData) {

        return axios.post("http://localhost:8080/api/jobDescriptions/add", jobDescriptionData)
    }
    getJobDescritions() {
        return axios.get("http://localhost:8080/api/jobDescriptions/getall");
    }
    getJobDescritionJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/jobDescriptions/${jobSeekerId}`);
    }

}