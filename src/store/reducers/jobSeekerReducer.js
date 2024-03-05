import { ADD_JOBSEEKER_ERROR, ADD_JOBSEEKER_SUCCESS, SET_JOBSEEKERS } from "../actions/jobSeekerActions";
import { jobSeekerItems } from "../initialValues/jobSeekerItems";



const initialState={
    jobSeekerItems:jobSeekerItems,
    error:null
}

export default function jobSeekerReducer(state=initialState,action){
    switch (action.type) {
        case ADD_JOBSEEKER_SUCCESS:
            return{
                ...state,
                jobSeekerItems:[...state.jobSeekerItems,action.payload],
                error:null
            }
    case ADD_JOBSEEKER_ERROR:
        return{
            ...state,
            error:action.payload
        }

    case SET_JOBSEEKERS:
        return{
            ...state,
            jobSeekerItems: action.payload
        }
        default:
           return state
    }
}