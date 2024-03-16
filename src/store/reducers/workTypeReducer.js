import { ADD_WORK_TYPE_ERROR, ADD_WORK_TYPE_SUCCESS, SET_WORK_TYPES } from "../actions/workTypeActions";
import { workTypeItems } from "../initialValues/workTypeItems";

const initialState={
    workTypeItems:workTypeItems,
    error:null
}


export default function workTypeReducer(state=initialState,action){
    switch(action.type){
        case SET_WORK_TYPES:
        return{
            ...state,
            workTypeItems:action.payload
        }
        case ADD_WORK_TYPE_SUCCESS:
            return{
                ...state,
                workTypeItems:[...state.workTypeItems,action.payload],
                error:null
            }
        case ADD_WORK_TYPE_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}