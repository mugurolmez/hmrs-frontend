import CoverLetterService from "../../services/coverLetterService"
import { addCoverLetterError, addCoverLetterSuccess, getCoverLetterByJobSeekerId } from "../actions/coverLetterActions"


export const addCoverLetter=(values)=>{
    let response
    return async(dispatch)=>{
        try{
            response =await new CoverLetterService().AddCoverLetterr(values)
            dispatch(addCoverLetterSuccess(response.data))
            console.log(response.data.message)
            console.log(response.data.success)
          
   
        }catch(error){
            dispatch(addCoverLetterError(error))
            console.log('kayıt hatası',error)
            
        }
    }
}

export const fetchCoverLetterByJobSeekerId=(jobSeekerId)=>{
    return async(dispatch)=>{
        try{
            const response=await new CoverLetterService().getCoverLetterByJobSeekerId(jobSeekerId)
            dispatch(getCoverLetterByJobSeekerId(response.data.data))
            console.log("API Yanıtı - Başarı:", response.data.success);
            console.log("API Yanıtı - Mesaj:", response.data.message);
            console.log("API Response:", response);

        }catch(error){
            console.error('Ön yazı getirme hatası:',error)
        }
    }
}