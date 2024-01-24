import axios from "axios"

export default class HrmsPersonService{
getHrmsPersons(){
    return axios.get("http://localhost:8080/api/hrmsPersons/getall");
}
addHrmsPerson(hmrsPersonData){
   
    return axios.post("http://localhost:8080/api/hrmsPersons/add",hmrsPersonData)
}
veifyEmployer(verifyEmployerData){
   
    return axios.post("http://localhost:8080/api/hrmsPersons/verify-employer/",verifyEmployerData)
}

}