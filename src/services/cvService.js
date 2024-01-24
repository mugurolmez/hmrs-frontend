import axios from "axios"

export default class CvService {

    getCvJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/schools/${jobSeekerId}`);
    }

}