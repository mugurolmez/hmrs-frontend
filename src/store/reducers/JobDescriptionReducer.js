import { ADD_JOB_DESCRIPTION_ERROR, ADD_JOB_DESCRIPTION_SUCCESS, SET_JOBDESCRIPTIONS } from "../actions/jobDescriptionActions";
import { jobDescriptionItems } from "../initialValues/jobDescriptionItems";

const initialState = {
    jobDescriptionItems: jobDescriptionItems,
    error: null
}


export default function jobDescriptionReducer(state = initialState, action) {
    switch (action.type) {
        case SET_JOBDESCRIPTIONS:
            return {
                ...state,
                jobDescriptionItems: action.payload
            }
        case ADD_JOB_DESCRIPTION_SUCCESS:
            return {
                ...state,
                jobDescriptionItems: [ ...state.jobDescriptionItems, action.payload ],
                error:null
            }
        case ADD_JOB_DESCRIPTION_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }
}


