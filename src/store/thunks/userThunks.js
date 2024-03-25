import UserService from "../../services/userService"
import { addUserError, addUserSuccess, getAllUserError, getAllUserSuccess } from "../actions/userActions"



export const addUser=(values)=>async(dispatch)=>{
    try{
        const response= await new UserService().addUser(values)
        dispatch(addUserSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    
    }catch(error){
        dispatch(addUserError(error))
    }
}

export const getAllUser=()=>async(dispatch)=>{
    try{
        const response= await new UserService().getAllUsers()
        dispatch(getAllUserSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getAllUserError(error))
    }
}