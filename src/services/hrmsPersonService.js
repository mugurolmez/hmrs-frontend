import axios from "axios"

export default class HrmsPersonService{
getAllHrmsPersons(){
    return axios.get("http://localhost:8080/api/hrmsPersons/getall");
}
addHrmsPerson(hmrsPersonData){
   
    return axios.post("http://localhost:8080/api/hrmsPersons/add",hmrsPersonData)
}
verifyEmployer(verifyEmployerData){
   
    return axios.put("http://localhost:8080/api/hrmsPersons/verify-employer",verifyEmployerData)
}

}