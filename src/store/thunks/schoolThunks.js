import SchoolService from "../../services/schoolService"
import {addSchoolError, addSchoolSuccess } from "../actions/schoolActions"





export const addSchool=(values)=>async(dispatch)=>{
    try{
        const response =await new SchoolService().addSchool(values)
        dispatch(addSchoolSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);

    }catch(error){
        dispatch(addSchoolError(error))
    }
}