import axios from "axios"

export default class EmployerService{
getAllEmployers(){
    return axios.get("http://localhost:8080/api/employers/getall");
}
deactiveJobAdvertisement(employerId,jobAdvertisementId){
    return axios.put("http://localhost:8080/api/employers/deactivateJobAdvertisement",{employerId,jobAdvertisementId})
}
}