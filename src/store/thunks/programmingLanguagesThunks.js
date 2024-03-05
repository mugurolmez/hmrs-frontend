
import ProgrammingLanguageService from "../../services/programmingLanguageService";
import { setProgramminglanguagesByJobSeekerId } from "../actions/programmingLanguageActions";


export const fetchProgramminglanguagesByJobSeekerId = (jobSeekerId) => async (dispatch) => {
    let response
    try {
        response = await new ProgrammingLanguageService().getProgrammingLanguageJobSeekerId(jobSeekerId)
        dispatch(setProgramminglanguagesByJobSeekerId(response.data.data))
    } catch (error) {
        console.error('Programlama dilleri getirme hatası', error)
    }
}



