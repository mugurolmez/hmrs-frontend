import axios from "axios"

export default class JobAdvetisementService{
getAllActiveTrue(){
    return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveTrue")
}

addJobAdvertisement(jobAdvertisementData){
   
    return axios.post("http://localhost:8080/api/JobAdvertisements/add",jobAdvertisementData)
}
getAllActiveTrueDESC(){
    return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveTrueDESC")
}
getAllActiveTrueASC(){
    return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveTrueASC")
}
getAllActiveFalse(){
    return axios.get("http://localhost:8080/api/JobAdvertisements/getAllActiveFalse")
}
jobAdvertisementPassive(jobAdvertisementId){
    return axios.patch(`http://localhost:8080/api/JobAdvertisements/passive/${jobAdvertisementId}`)
}
jobAdvertisementActivate(jobAdvertisementId){
    return axios.patch(`http://localhost:8080/api/JobAdvertisements/activate/${jobAdvertisementId}`)
}
}
