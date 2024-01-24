import axios from "axios"

export default class LanguageService {
    AddLanguage(LanguageData) {
        return axios.post("http://localhost:8080/api/languages/add",LanguageData)
    }
  
    getLanguageJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/languages/${jobSeekerId}`);
    }

}