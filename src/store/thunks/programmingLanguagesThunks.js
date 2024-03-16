
import ProgrammingLanguageService from "../../services/programmingLanguageService";
import { addProgrammingLangugageError, addProgrammingLangugageSuccess, getProgramminglanguagesByJobSeekerIdError, getProgramminglanguagesByJobSeekerIdSuccess } from "../actions/programmingLanguageActions";


export const addProgrammingLanguage=(values)=>async(dispatch)=>{
    try{
        const response= await new ProgrammingLanguageService().AddProgrammingLanguage(values)
        dispatch(addProgrammingLangugageSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addProgrammingLangugageError(error))
    }
}


export const getProgramminglanguagesByJobSeekerId = (jobSeekerId) => async (dispatch) => {
   
    try {
       const response = await new ProgrammingLanguageService().getProgrammingLanguageJobSeekerId(jobSeekerId)
       await dispatch(getProgramminglanguagesByJobSeekerIdSuccess(response.data.data))
    } catch (error) {
      await dispatch(getProgramminglanguagesByJobSeekerIdError(error))
    }
}



