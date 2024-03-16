import { ADD_JOB_ADVERTISEMENT_ERROR, ADD_JOB_ADVERTISEMENT_SUCCESS, GET_ALL_ACTIVE_JOB_ADVERTISEMENT_ERROR, GET_ALL_ACTIVE_JOB_ADVERTISEMENT_SUCCESS, GET_ALL_PASSIVE_JOB_ADVERTISEMENT_ERROR, GET_ALL_PASSIVE_JOB_ADVERTISEMENT_SUCCESS } from "../actions/jobAdvertisementActions";
import { jobAdvertisementItems } from "../initialValues/jobAdvertisements";



const initialState = {
    jobAdvertisementItems: jobAdvertisementItems,
    error: null
}

export default function jobAdvertisementReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_JOB_ADVERTISEMENT_SUCCESS:
            return {
                ...state,
                jobAdvertisementItems: [...state.jobAdvertisementItems, action.payload],
                error: null
            }

        case ADD_JOB_ADVERTISEMENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALL_ACTIVE_JOB_ADVERTISEMENT_SUCCESS:
            return {
                ...state,
                jobAdvertisementItems: action.payload,
                error: null
            }
        case GET_ALL_ACTIVE_JOB_ADVERTISEMENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_ALL_PASSIVE_JOB_ADVERTISEMENT_SUCCESS:
            return {
                ...state,
                jobAdvertisementItems: action.payload,
                error: null
            }
        case GET_ALL_PASSIVE_JOB_ADVERTISEMENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}