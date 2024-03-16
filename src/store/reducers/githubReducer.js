import { ADD_GITHUB_ERROR, ADD_GITHUB_SUCCES, GET_JOBSEEKER_GITHUB_ERROR, GET_JOBSEEKER_GITHUB_SUCCESS } from "../actions/githubActions";
import { githubitem } from "../initialValues/githubItem";

const initialState = {
    githubItem: githubitem,
    error:null
}


export default function githubReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_GITHUB_SUCCES:
            return {
                ...state,
                githubItem: action.payload,
                error: null
            }

        case ADD_GITHUB_ERROR:
            return {
                ...state,
                githubItem: null,
                error: action.payload
            }

            case GET_JOBSEEKER_GITHUB_SUCCESS:
                return {
                    ...state,
                    githubItem: action.payload,
                    error: null
                }
                case GET_JOBSEEKER_GITHUB_ERROR:
                    return {
                        ...state,
                        githubItem: null,
                        error: action.payload
                    }
        default:
            return state
    }
}