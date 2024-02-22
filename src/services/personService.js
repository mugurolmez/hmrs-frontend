import axios from "axios"

export default class PersonService {

    getPersons() {
        return axios.get("http://localhost:8080/api/persons/getall");
    }

}