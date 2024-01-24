import axios from "axios"

export default class PersonService {
    AddPerson(personData) {
        return axios.post("http://localhost:8080/api/persons/add", personData )
    }
  
    getPersons() {
        return axios.get("http://localhost:8080/api/persons/getall");
    }

}