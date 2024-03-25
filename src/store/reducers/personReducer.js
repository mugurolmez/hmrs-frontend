import { ADD_PERSON_ERROR, ADD_PERSON_SUCCESS, GET_ALL_PERSON_ERROR, GET_ALL_PERSON_SUCCESS } from "../actions/personActions";
import { personItem, personItems } from "../initialValues/personItems";




const initialState = {
    personItem: personItem,
    personItems: personItems,
    error: null
}

export default function personReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PERSON_SUCCESS:
            return {
                ...state,
                personItem: action.payload,
                error: null
            }
        case ADD_PERSON_ERROR:
            return {
                ...state,
                personItem: null,
                error: action.payload
            }
        case GET_ALL_PERSON_SUCCESS:
            return {
                ...state,
                personItems:action.payload,
                error: null
            }
        case GET_ALL_PERSON_ERROR:
            return {
                ...state,
                personItems: null,
                error: action.payload
            }
        default:
            return state
    }
}