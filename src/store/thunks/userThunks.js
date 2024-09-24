import UserService from "../../services/userService"
import { addUserError, addUserSuccess, getAllUserError, getAllUserSuccess } from "../actions/userActions"



export const addUser=(values)=>async(dispatch)=>{
    try{
        const response= await new UserService().addUser(values)
        
        dispatch(addUserSuccess(response.data))
        console.log("API Yanıtı - Başarı:", response.success);
        console.log("API Yanıtı - Mesaj:", response.message);
    
    }catch(error){
        dispatch(addUserError(error))
    }
}

export const getAllUser=()=>async(dispatch)=>{
    try{
        const response= await new UserService().getAllUsers()

        console.log('userhunk console'+JSON.stringify(response.data))
        dispatch(getAllUserSuccess(response.data))
        console.log("API Yanıtı - Başarı:", response.success);
        console.log("API Yanıtı - Mesaj:", response.message);
    }catch(error){
        dispatch(getAllUserError(error))
    }
}