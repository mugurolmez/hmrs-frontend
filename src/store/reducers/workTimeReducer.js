import { ADD_WORKTIME_ERROR, ADD_WORKTIME_SUCCESS, SET_WORKTIMES } from "../actions/workTimeActions"
import { workTimeItems } from "../initialValues/workTimeItems"



const initialState = {
    workTimeItems: workTimeItems,
    error: null
}


export default function workTimeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WORKTIMES:
            return {
                ...state,
                workTimeItems: action.payload
            }
        case ADD_WORKTIME_SUCCESS:
            return {
                ...state,
                workTimeItems: [...state.workTimeItems, action.payload],
                error: null
            }
        case ADD_WORKTIME_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}