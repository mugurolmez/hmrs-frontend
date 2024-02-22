
import axios from 'axios'

export default class WorkTypeService {
 async AddWorkType(workTypeName){
    return await axios.post("http://localhost:8080/api/work-type/add",workTypeName)
 }
async getAllWorkType(){
    return await axios.get("http://localhost:8080/api/work-type/getAll")
}
}
