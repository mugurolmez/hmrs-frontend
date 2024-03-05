import { ADD_TO_PROGRAMINGLANGUAGE, SET_PROGRAMMING_LANGUAGES, SET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID } from "../actions/programmingLanguageActions";


const initialState = {

    programmingLanguagesItems: []
}

export default function programmingLanguageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_PROGRAMINGLANGUAGE:
            return {
                ...state,
                programmingLanguagesItems: action.payload
            }

        case SET_PROGRAMMING_LANGUAGES:
            return {
                ...state,
                programmingLanguagesItems: action.payload,
            }

        case SET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID:
            return {
                ...state,
                programmingLanguagesItems: action.payload
            }
        default:
            return state

    }

} 