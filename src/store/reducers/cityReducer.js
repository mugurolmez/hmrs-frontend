import { SET_CITIES } from "../actions/cityActions"
import { cityItems } from "../initialValues/cityItems"



const initialState = {
    cityItems: cityItems,
    error:null
}

export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cityItems: action.payload
            }

        default:
            return state
    }
}