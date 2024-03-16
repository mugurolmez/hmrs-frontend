
import { ADD_LANGUAGE_ERROR } from "../actions/languageActions"
import { ADD_LINKEDIN_SUCCESS } from "../actions/linkedinActions"
import { linkedinItem } from "../initialValues/linkedinItem"



const initialState = {
    linkedinItem: linkedinItem,
    error: null
}

export default function linkedinReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LINKEDIN_SUCCESS:
            return {
                ...state,
                linkedinItem: action.payload,
                error: null
            }
        case ADD_LANGUAGE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}