import PersonService from "../../services/personService";
import { getAllPersonError, getAllPersonSuccess } from "../actions/personActions";




    export const getAllPersons=()=>async(dispatch)=>{
        try{
            const response=await new PersonService().getAllPersons()
            dispatch(getAllPersonSuccess(response.data.data))
            console.log(response.data)
            console.log("API Yanıtı - Başarı:", response.data.success);
            console.log("API Yanıtı - Mesaj:", response.data.message);
        }catch(error){
            dispatch(getAllPersonError(error))
            console.log('iş arayan getirme hatası',error)
        }
    }
    