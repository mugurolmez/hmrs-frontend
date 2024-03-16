import UserService from "../../services/userService"
import { addUserError, addUserSucces, setUser } from "../actions/userActions"



export const addUser=(values)=>async(dispatch)=>{
    try{
        const response= await new UserService().addUser(values)
        dispatch(addUserSucces(response.data.data))
        dispatch(setUser(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addUserError(error))
    }
}