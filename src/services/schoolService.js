import axios from "axios"

export default class SchoolService {
    addSchool(school) {
        return axios.post("http://localhost:8080/api/schools/add", school)
    }
  
    getSchoolJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/schools/${jobSeekerId}`);
    }

}