import axios from "axios"

export default class UserService{
async getAllUsers(){
    return  await axios.get("http://localhost:8080/api/users/getall")
}

async addUser(userData){
   
    return  await 
    axios.post("http://localhost:8080/api/users/add",userData)
}
}
