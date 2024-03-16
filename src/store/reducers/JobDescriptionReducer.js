import { ADD_JOB_DESCRIPTION_ERROR, ADD_JOB_DESCRIPTION_SUCCESS, GET_ALL_JOBDESCRIPTIONS_ERROR, GET_ALL_JOBDESCRIPTIONS_SUCCESS, GET_JOBDESCRIPTION_BY_ID_ERROR, GET_JOBDESCRIPTION_BY_ID_SUCCESS } from "../actions/jobDescriptionActions";
import { jobDescriptionItem, jobDescriptionItems } from "../initialValues/jobDescriptionItems";



const initialState = {
    jobDescriptionItem: jobDescriptionItem,
    jobDescriptionItems: jobDescriptionItems,
    error: null
}

export default function jobDescriptionReducer(state = initialState, action) {
    switch (action.type) {

        case GET_JOBDESCRIPTION_BY_ID_SUCCESS:
            return {
                ...state,
                jobDescriptionItem: action.payload,
                error: null
            }

        case GET_JOBDESCRIPTION_BY_ID_ERROR:
            return {
                ...state,
                jobDescriptionItem: null,
                error: action.payload
            }

        case GET_ALL_JOBDESCRIPTIONS_SUCCESS:
            return {
                ...state,
                jobDescriptionItems: action.payload,
                error: null
            }

        case GET_ALL_JOBDESCRIPTIONS_ERROR:
            return {
                ...state,
                jobDescriptionItems: null,
                error: action.payload
            }

        case ADD_JOB_DESCRIPTION_SUCCESS:
            return {
                ...state,
                jobDescriptionItems: [...state.jobDescriptionItems, action.payload],
                error: null
            }
        case ADD_JOB_DESCRIPTION_ERROR:
            return {
                ...state,
                jobDescriptionItems: null,
                error: action.payload
            }
        default:
            return state
    }
}


