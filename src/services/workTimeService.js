
import axios from 'axios'

export default class WorkTimeService {
 async AddWorkTime(workTimeName){
    return await axios.post("http://localhost:8080/api/work-time/add",workTimeName)
 }
async getAllWorkTime(){
    return await axios.get("http://localhost:8080/api/work-time/getAll")
}
}
