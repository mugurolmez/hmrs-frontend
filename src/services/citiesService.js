import axios from "axios"

export default class UserService{
getCities(){
    return axios.get("http://localhost:8080/api/Cities/getall")
}

addCity(cityData){
   
    return axios.post("http://localhost:8080/api/city/add",cityData)
}
}
