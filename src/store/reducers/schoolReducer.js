import { ADD_SCHOOL_ERROR, ADD_SCHOOL_SUCCESS, SET_SCHOOL } from "../actions/schoolActions";
import { schoolItems } from "../initialValues/schoolItems";


const initialState={
    schoolItems:schoolItems,
    error:null
}

export default function schoolReducer(state=initialState,action){
    switch (action.type) {
        case ADD_SCHOOL_SUCCESS:
            return{
                ...state,
                schoolItems:[...state.schoolItems,action.payload],
                error:null
            }
            case ADD_SCHOOL_ERROR:
            return{
                ...state,
                error:action.payload
            }
            case SET_SCHOOL:
                return{
                    ...state,
                    schoolItems:action.payload
                }
    
        default:
            return state
    }
}