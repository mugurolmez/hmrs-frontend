import axios from "axios"

export default class TemporaryEmployerService {
    addTemporaryEployer(temporaryEmployerData) {
        return axios.post("http://localhost:8080/api/temporaryEmployers/add", temporaryEmployerData)
    }
    getTemporaryEployers() {
        return axios.get("http://localhost:8080/api/temporaryEmployers/getall");
    }
    getTemporaryEployersId(id) {
        return axios.get(`http://localhost:8080/api/temporaryEmployers/${id}`);
    }

}