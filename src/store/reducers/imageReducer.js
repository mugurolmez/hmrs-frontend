import { ADD_IMAGE_ERROR, ADD_IMAGE_SUCCESS, DELETE_IMAGE_ERROR, DELETE_IMAGE_SUCCESS, GET_ALL_IMAGES_ERROR, GET_ALL_IMAGES_SUCCCESS } from "../actions/imageActions";
import { imageItem, imageItems } from "../initialValues/ImageItems";

const initialState = {
    imageItem: imageItem,
    imageItems: imageItems,
    error: null
}

export default function imageReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_IMAGE_SUCCESS:
            return {
                ...state,
                imageItem: action.payload,
                error: null
            }
        case ADD_IMAGE_ERROR:
            return {
                ...state,
                imageItem: null,
                error: action.payload
            }
        case GET_ALL_IMAGES_SUCCCESS:
            return {
                ...state,
                imageItems: action.payload,
                error: null
            }
        case GET_ALL_IMAGES_ERROR:
            return {
                ...state,
                imageItems: null,
                error: action.payload
            }
        case DELETE_IMAGE_SUCCESS:
            return {
                ...state,
                imageItems: action.payload,
                error: null
            }
        case DELETE_IMAGE_ERROR:
            return {
                ...state,
                imageItems: null,
                error: action.payload
            }

        default:
            return state
    }
}