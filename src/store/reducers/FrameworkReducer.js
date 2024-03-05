import { ADD_FRAMEWORK_ERROR, ADD_FRAMEWORK_SUCCES } from "../actions/frameworkActions";
import { frameworkItems } from "../initialValues/frameworkItems";



const initialState={
    frameworkData:frameworkItems,
    error:null
}

export default function frameworkReducer(state=initialState,action){
    switch(action.type){
        case ADD_FRAMEWORK_SUCCES:
            return {
                ...state,
                frameworkData:action.payload,
                error:null,
            }

        case ADD_FRAMEWORK_ERROR:
            return{
                ...state,
                frameworkData:null,
                error:action.payload
            }    

        default:
            return state
    }
}