import { ADD_HRMS_PERSON_ERROR, ADD_HRMS_PERSON_SUCCESS } from "../actions/hrmsPersonActions";
import { hrmsPersonItems } from "../initialValues/hrmsPersonItems";



const initialState={
    hrmsPersonItems:hrmsPersonItems
}

export default function hrmsPersonReducer(state=initialState,action){
    switch (action.type) {
        case ADD_HRMS_PERSON_SUCCESS:
           return{
            ...state,
            hrmsPersonItems:action.payload,
            error:null
           } 

        case ADD_HRMS_PERSON_ERROR:
            return{
                ...state,
                hrmsPersonItems:null,
                error:action.payload
            }
           
    
        default:
            return state
    }
}