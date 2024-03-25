import { ADD_PROGRAMMING_LANGUAGE_ERROR, ADD_PROGRAMMING_LANGUAGE_SUCCESS, GET_JOBSEEKER_PROGRAMMING_LANGUAGES_ERROR, GET_JOBSEEKER_PROGRAMMING_LANGUAGES_SUCCESS } from "../actions/programmingLanguageActions";
import { programmingLanguageItems } from "../initialValues/programmingLanguageItems";


const initialState = {

    programmingLanguageItems: programmingLanguageItems,
    error: null
}

export default function programmingLanguageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PROGRAMMING_LANGUAGE_SUCCESS:
            return {
                ...state,
                programmingLanguageItems: [...state.programmingLanguageItems, action.payload],
                error: null
            }
        case ADD_PROGRAMMING_LANGUAGE_ERROR:
            return {
                ...state,
                error: action.payload
            }
    

        case GET_JOBSEEKER_PROGRAMMING_LANGUAGES_SUCCESS:
            return {
                ...state,
                programmingLanguageItems: action.payload,
                error:null
            }
            case GET_JOBSEEKER_PROGRAMMING_LANGUAGES_ERROR:
                return {
                    ...state,
                    programmingLanguageItems: null,
                    error:action.payload
                }

        default:
            return state

    }

} 