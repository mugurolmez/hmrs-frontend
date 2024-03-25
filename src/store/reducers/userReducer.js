import { ADD_USER_ERROR, ADD_USER_SUCCESS, GET_ALL_USER_ERROR, GET_ALL_USER_SUCCESS } from "../actions/userActions";
import { userItems } from "../initialValues/userItems";

const initialState = {
    userItems: userItems,
    error: null
}


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_SUCCESS:
            return {
                ...state,
                userItems: [...state.userItems, action.payload],
                error: null
            }
        case ADD_USER_ERROR:
            return {
                ...state,
                error: null
            }
        case GET_ALL_USER_SUCCESS:
            return {
                ...state,
                userItems: action.payload,
                error: null
            }
        case GET_ALL_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}