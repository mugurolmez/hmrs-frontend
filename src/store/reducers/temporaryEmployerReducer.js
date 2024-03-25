import { ADD_TEMPORARY_EMPLOYER_ERROR, ADD_TEMPORARY_EMPLOYER_SUCCESS, GET_ALL_TEMPORARY_EMPLOYER_ERROR, GET_ALL_TEMPORARY_EMPLOYER_SUCCESS } from "../actions/temporaryEmployerActions";
import { temporaryEmployerItems } from "../initialValues/temporaryEmployerItems";



const initialState = {
    temporaryEmployerItems: temporaryEmployerItems,
    error: null
}


export default function temporaryEmployerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TEMPORARY_EMPLOYER_SUCCESS:
            return {
                ...state,
                temporaryEmployerItems: [...state.temporaryEmployerItems, action.payload],
                error: null
            }
        case ADD_TEMPORARY_EMPLOYER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case GET_ALL_TEMPORARY_EMPLOYER_SUCCESS:
            return {
                ...state,
                temporaryEmployerItems: action.payload,
                error: null
            }
        case GET_ALL_TEMPORARY_EMPLOYER_ERROR:
            return {
                ...state,
                temporaryEmployerItems: null,
                error: action.payload
            }
        default:
            return state
    }
}