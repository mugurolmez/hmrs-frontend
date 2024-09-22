import axios from "axios"

export default class CitiesService{
    constructor() {
        // Çevresel değişkenin doğru şekilde yüklendiğini kontrol edelim
        console.log(`API URL: ${process.env.REACT_APP_API_URL}`);
        
        // Axios için temel URL'yi ayarlayalım
        this.apiClient = axios.create({
          baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080", // Varsayılan olarak localhost:8080 kullanılacak
        });
      }
      
async getAllCities(){
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/Cities/getall`)
}

addCity(cityData){
   
    return axios.post("http://localhost:8080/api/city/add",cityData)
}
}
