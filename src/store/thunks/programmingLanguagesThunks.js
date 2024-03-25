
import ProgrammingLanguageService from "../../services/programmingLanguageService";
import { addProgrammingLangugageError, addProgrammingLangugageSuccess, getJobSeekerProgramminglanguagesError, getJobSeekerProgramminglanguagesSuccess } from "../actions/programmingLanguageActions";


export const addProgrammingLanguage = (values) => async (dispatch) => {
    try {
        const response = await new ProgrammingLanguageService().AddProgrammingLanguage(values)
        dispatch(addProgrammingLangugageSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    } catch (error) {
        dispatch(addProgrammingLangugageError(error))
    }
}


export const getJobSeekerProgrammingLanguages = (jobSeekerId) => async (dispatch) => {
    try {
        const response = await new ProgrammingLanguageService().getProgrammingLanguageJobSeekerId(jobSeekerId)
        console.log(response.data.data)
        dispatch(getJobSeekerProgramminglanguagesSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    } catch (error) {
        await dispatch(getJobSeekerProgramminglanguagesError(error))
        console.log("programlama dilleri getirme hatası")
    }
}



