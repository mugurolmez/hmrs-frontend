import { ADD_LANGUAGE_ERROR, ADD_LANGUAGE_SUCCESS, GET_JOBSEEKER_LANGUAGES_ERROR, GET_JOBSEEKER_LANGUAGES_SUCCESS } from "../actions/languageActions";
import { languageItems } from "../initialValues/languageItems"


const initialState = {
    languageItems: languageItems,
    error: null
}

export default function languageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LANGUAGE_SUCCESS:
            return {
                ...state,
                languageItems: [...state.languageItems, action.payload],
                error: null
            }
        case ADD_LANGUAGE_ERROR:
            return {
                ...state,
                error: action.payload
            }
            
        case GET_JOBSEEKER_LANGUAGES_SUCCESS:
            return {
                ...state,
                languageItems:action.payload,
                error: null
            }
            case GET_JOBSEEKER_LANGUAGES_ERROR:
            return {
                ...state,
                languageItems:null,
                error: action.payload
            }
        default:
            return state
    }

}