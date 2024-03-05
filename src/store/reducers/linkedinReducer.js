import { ADD_LANGUAGE_SUCCES } from "../actions/languageActions";
import { linkedin, linkedinItem } from "../initialValues/linkedinItem"



initialValues = {
    linkedinItem: linkedinItem,
    error: null
}

export default function linkedinReducer(state = initialValues, action) {
    switch (action.type) {
        case ADD_LANGUAGE_SUCCES:
            return {
                ...state,
                linkedinItem: action.payload,
                error: null
            }
        case ADD_LANGUAGE_SUCCES:
            return {
                ...state,
                linkedinItem: action.payload,
                error: null
            }
        default:
            return state
    }
}