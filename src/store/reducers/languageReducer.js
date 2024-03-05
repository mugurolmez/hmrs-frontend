import { ADD_LANGUAGE_ERROR, ADD_LANGUAGE_SUCCES, SET_LANGUAGES } from "../actions/languageActions";
import { languageItems } from "../initialValues/languageItems"


initialState = {
    languageItems: languageItems,
    error: null
}

export default function languageReducer(state = languageItems, action) {
    switch (action.type) {
        case ADD_LANGUAGE_SUCCES:
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
        case SET_LANGUAGES:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}