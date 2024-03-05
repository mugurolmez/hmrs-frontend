import { ADD_COVERLETTER_SUCCESS, ADD_COVERLETTER_ERROR, GET_COVERLETTER_BY_JOB_SEEKER_ID } from "../actions/coverLetterActions";
import { coverLetterItem } from "../initialValues/coverLetterItem";


const initialState = {
    coverLetterItem: coverLetterItem,
    error: null
}

export default function coverLetterReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COVERLETTER_SUCCESS:
            return {
                ...state,
                coverLetterItem: action.payload,
                error: null,
            }
        case ADD_COVERLETTER_ERROR:
            return {
                ...state,
                frameworkData: null,
                error: action.payload
            }

        case GET_COVERLETTER_BY_JOB_SEEKER_ID:
            return {
                ...state,
                coverLetterItem: action.payload
            }

        default:
            return state
    }
}