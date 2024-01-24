import axios from "axios"

export default class SchoolService {
    AddSchool(schoolData) {
        return axios.post("http://localhost:8080/api/schools/add", schoolData)
    }
  
    getSchoolJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/schools/${jobSeekerId}`);
    }

}