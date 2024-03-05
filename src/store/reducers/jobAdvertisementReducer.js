import { ADD_JOB_ADVERTISEMENT_ERROR, ADD_JOB_ADVERTISEMENT_SUCCESS } from "../actions/jobAdvertisementActions";
import { jobAdvertisementItems } from "../initialValues/jobAdvertisements";



initialState={
    jobAdvertisementItems:jobAdvertisementItems,
    error:null
}

export default function jobAdvertisementReducer(state=jobAdvertisementItems,action){
   switch (action.type) {
    case ADD_JOB_ADVERTISEMENT_SUCCESS:
        return{
            ...state,
            jobAdvertisementItems:[...state.jobAdvertisementItems,action.payload],
            error:null
        }

        case ADD_JOB_ADVERTISEMENT_ERROR:
            return{
                ...state,
                jobAdvertisementItems:null,
                error:action.payload
            }
   
    default:
       return state
   }

}