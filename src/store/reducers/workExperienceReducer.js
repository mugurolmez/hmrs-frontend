import { ADD_WORK_EXPERIENCE_ERROR, ADD_WORK_EXPERIENCE_SUCCESS } from "../actions/workExperienceActions";
import { jobseekerWorkExperienceItems } from "../initialValues/workExperienceItems";



const initialState={
    jobSeekerWorkExperienceItems:jobseekerWorkExperienceItems,
    error:null
}

export default function workExperienceReducer(state=initialState,action){
    switch (action.type) {
        case ADD_WORK_EXPERIENCE_SUCCESS:
            return{
                ...state,
                jobSeekerWorkExperienceItems:[...state.jobSeekerWorkExperienceItems,action.payload],
                error:null
            }
            case ADD_WORK_EXPERIENCE_ERROR:
                return{
                    ...state,
                    error:action.payload
                }
        default:
           return state
    }
}