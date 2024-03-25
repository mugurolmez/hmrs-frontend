import LanguageService from "../../services/languageService"
import { addLanguageError, addLanguageSuccess, getJobSeekerLanguagesError, getJobSeekerLanguagesSuccess } from "../actions/languageActions"




export const addLanguage = (values) => async (dispatch) => {
    try {
        const response = await new LanguageService().AddLanguage(values)
        dispatch(addLanguageSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    } catch (error) {
        dispatch(addLanguageError(error))
    }
}
export const getJobSeekerLanguages=(jobSeekerId)=>async(dispatch)=>{
    try{
        const response= await new LanguageService().getLanguageJobSeekerId(jobSeekerId)
        dispatch(getJobSeekerLanguagesSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(getJobSeekerLanguagesError(error))
    }
}