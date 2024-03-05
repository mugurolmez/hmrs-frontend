import { combineReducers } from "redux";
import coverLetterReducer from "./reducers/coverLetterReducer";
import programmingLanguageReducer from "./reducers/programmingLanguageReducer";
import frameworkReducer from "./reducers/FrameworkReducer";
import cityReducer from "./reducers/cityReducer";
import jobDescriptionReducer from "./reducers/JobDescriptionReducer";
import workTypeReducer from "./reducers/workTypeReducer";
import workTimeReducer from "./reducers/workTimeReducer";
import jobSeekerReducer from "./reducers/jobSeekerReducer";



const rootReducer =combineReducers({
    coverLetter:coverLetterReducer,
    programmingLanguages:programmingLanguageReducer,
    framework:frameworkReducer,
    city:cityReducer,
    jobDescription:jobDescriptionReducer,
    workType:workTypeReducer,
    workTime:workTimeReducer,
    jobSeeker:jobSeekerReducer
})

export default rootReducer;