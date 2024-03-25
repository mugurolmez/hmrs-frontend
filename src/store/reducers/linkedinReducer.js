


import { ADD_LINKEDIN_ERROR, ADD_LINKEDIN_SUCCESS, GET_JOBSEEKER_LINKEDIN_ERROR, GET_JOBSEEKER_LINKEDIN_SUCCESS } from "../actions/linkedinActions"
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

        case ADD_LINKEDIN_ERROR:
            return {
                ...state,
                linkedinItem: null,
                error: action.payload
            }

        case GET_JOBSEEKER_LINKEDIN_SUCCESS:
            return {
                ...state,
                linkedinItem: action.payload,
                error: null
            }
        case GET_JOBSEEKER_LINKEDIN_ERROR:
            return {
                ...state,
                linkedinItem: null,
                error: action.payload
            }
        default:
            return state
    }
}