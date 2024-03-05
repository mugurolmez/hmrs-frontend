import { ADD_GITHUB_ERROR, ADD_GITHUB_SUCCES } from "../actions/githubActions";
import { githubitem } from "../initialValues/githubItem";

initialState = {
    githubItem: githubitem
}


export default function githubReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_GITHUB_SUCCES:
            return {
                ...state,
                githubitem: action.payload,
                error: null
            }

        case ADD_GITHUB_ERROR:
            return {
                ...state,
                githubitem: null,
                error: action.payload
            }
        default:
            return state
    }
}