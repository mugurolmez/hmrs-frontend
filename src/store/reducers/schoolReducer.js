import { ADD_SCHOOL_ERROR, ADD_SCHOOL_SUCCESS, GET_JOBSEEKER_SCHOOLS_ERROR, GET_JOBSEEKER_SCHOOLS_SUCCESS } from "../actions/schoolActions";
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
                schoolItems:null,
                error:action.payload
            }
            case GET_JOBSEEKER_SCHOOLS_SUCCESS:
                return{
                    ...state,
                    schoolItems:action.payload,
                    error:null
                }
                case GET_JOBSEEKER_SCHOOLS_ERROR:
                    return{
                        ...state,
                        schoolItems:null,
                        error:action.payload
                    }
    
        default:
            return state
    }
}