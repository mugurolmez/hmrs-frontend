import LanguageService from "../../services/languageService"
import { addLanguageError, addLanguageSuccess } from "../actions/languageActions"




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
