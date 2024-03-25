import { ADD_WORK_EXPERIENCE_ERROR, ADD_WORK_EXPERIENCE_SUCCESS, GET_JOB_SEEKER_WORKEXPERIENCES_ERROR, GET_JOB_SEEKER_WORKEXPERIENCES_SUCCESS } from "../actions/workExperienceActions";
import {workExperienceItems } from "../initialValues/workExperienceItems";



const initialState={
    workExperienceItems:workExperienceItems,
    error:null
}

export default function workExperienceReducer(state=initialState,action){
    switch (action.type) {
        case ADD_WORK_EXPERIENCE_SUCCESS:
            return{
                ...state,
                workExperienceItems:[...state.workExperienceItems,action.payload],
                error:null
            }
            case ADD_WORK_EXPERIENCE_ERROR:
                return{
                    ...state,
                    error:action.payload
                }

        case GET_JOB_SEEKER_WORKEXPERIENCES_SUCCESS:
            return{
                ...state,
                workExperienceItems:action.payload,
                error:null
            }    

            case GET_JOB_SEEKER_WORKEXPERIENCES_ERROR:
                return{
                    ...state,
                    workExperienceItems:[],
                    error:action.payload
                }  
        default:
           return state
    }
}