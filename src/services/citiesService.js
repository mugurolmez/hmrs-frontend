import axios from "axios"

export default class CitiesService{
async getCities(){
    return await axios.get("http://localhost:8080/api/Cities/getall")
}

addCity(cityData){
   
    return axios.post("http://localhost:8080/api/city/add",cityData)
}
}
