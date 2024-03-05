import { SET_WORKTYPES } from "../actions/workTypeActions";
import { workTypeItems } from "../initialValues/workTypeItems";

const initialState={
    workTypeItems:workTypeItems
}


export default function workTypeReducer(state=initialState,action){
    switch(action.type){
        case SET_WORKTYPES:
        return{
            ...state,
            workTypeItems:action.payload
        }
        default:
            return state
    }
}