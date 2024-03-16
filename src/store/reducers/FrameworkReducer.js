import { ADD_FRAMEWORK_ERROR, ADD_FRAMEWORK_SUCCESS, SET_FRAMEWORKS_BY_JOBSEEKERID_ERROR, SET_FRAMEWORKS_BY_JOBSEEKERID_SUCCESS } from "../actions/frameworkActions";
import { frameworkItems } from "../initialValues/frameworkItems";



const initialState={
    frameworkItems:frameworkItems,
    error:null
}

export default function frameworkReducer(state=initialState,action){
    switch(action.type){
        case ADD_FRAMEWORK_SUCCESS:
            return {
                ...state,
                frameworkItems:action.payload,
                error:null,
            }

        case ADD_FRAMEWORK_ERROR:
            return{
                ...state,
                frameworkItems:null,
                error:action.payload
            }    
            case SET_FRAMEWORKS_BY_JOBSEEKERID_SUCCESS:
                return {
                    ...state,
                    frameworkItems:action.payload,
                    error:null,
                }
    
            case SET_FRAMEWORKS_BY_JOBSEEKERID_ERROR:
                return{
                    ...state,
                    frameworkItems:null,
                    error:action.payload
                } 

        default:
            return state
    }
}