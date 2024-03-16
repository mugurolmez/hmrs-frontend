import { SET_EMPLOYERS_ERROR, SET_EMPLOYERS_SUCCESS } from "../actions/employerActions";
import { employerItems } from "../initialValues/employerItems";




const initialState={
    employerItems:employerItems,
}

export default function employerReducer(state=initialState,action){
    switch (action.type) {
        case SET_EMPLOYERS_SUCCESS:
            return{
            ...state,
            employerItems:action.payload,
            error:null
            }
        case SET_EMPLOYERS_ERROR:
            return{
                ...state,
                employerItems:null,
                error:action.payload
            }
    
        default:
          return state
    }
}