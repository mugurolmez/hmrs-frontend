import axios from "axios"

export default class CoverLetterService {
    AddCoverLetter(coverLetterData) {
        return axios.post("http://localhost:8080/api/cover-letter/add", coverLetterData)
    }
  
    getCoverLetterJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/cover-letter/${jobSeekerId}`);
    }

}