import { SET_WORKTIMES } from "../actions/workTimeActions"
import { workTimeItems } from "../initialValues/workTimeItems"



const initialState={
    workTimeItems:workTimeItems
}


export default function workTimeReducer(state=initialState,action){
    switch(action.type){
        case SET_WORKTIMES:
        return{
            ...state,
            workTimeItems:action.payload
        }
        default:
            return state
    }
}