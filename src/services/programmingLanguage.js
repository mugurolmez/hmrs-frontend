import axios from "axios"

export default class ProgrammingLanguageService {
    AddProgrammingLanguage(programmingLanguageData) {
        return axios.post("http://localhost:8080/api/programming-languages/add", programmingLanguageData)
    }
  
    getProgrammingLanguageJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/programming-languages/${jobSeekerId}`);
    }

}