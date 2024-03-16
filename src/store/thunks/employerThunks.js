import EmployerService from "../../services/employerService";
import { setEmployerError, setEmployerSuccess } from "../actions/employerActions";




export const setEmployers=()=>{
    return async(dispatch)=>{
try{
    const response=await new EmployerService().getAllEmployers()
    dispatch(setEmployerSuccess(response.data.data))
    console.log("API Yanıtı - Başarı:", response.data.success);
    console.log("API Yanıtı - Mesaj:", response.data.message);


}catch(error){
    dispatch(setEmployerError(error))
}
    }
}