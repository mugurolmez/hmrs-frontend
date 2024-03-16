import { combineReducers } from "redux";
import coverLetterReducer from "./reducers/coverLetterReducer";
import programmingLanguageReducer from "./reducers/programmingLanguageReducer";
import cityReducer from "./reducers/cityReducer";
import workTypeReducer from "./reducers/workTypeReducer";
import workTimeReducer from "./reducers/workTimeReducer";
import jobSeekerReducer from "./reducers/jobSeekerReducer";
import githubReducer from "./reducers/githubReducer";
import hrmsPersonReducer from "./reducers/hrmsPersonReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import languageReducer from "./reducers/languageReducer";
import linkedinReducer from "./reducers/linkedinReducer";
import schoolReducer from "./reducers/schoolReducer";
import temporaryEmployerReducer from "./reducers/temporaryEmployerReducer";
import userReducer from "./reducers/userReducer";
import workExperienceReducer from "./reducers/workExperienceReducer";
import jobDescriptionReducer from "./reducers/jobDescriptionReducer";
import employerReducer from "./reducers/employerReducer";
import frameworkReducer from "./reducers/frameworkReducer";


const rootReducer = combineReducers({
    city: cityReducer,
    coverLetter: coverLetterReducer,
    framework: frameworkReducer,
    github: githubReducer,
    hrmsPerson: hrmsPersonReducer,
    jobAdvertisement: jobAdvertisementReducer,
    jobDescription: jobDescriptionReducer,
    jobSeeker: jobSeekerReducer,
    language: languageReducer,
    linkedin: linkedinReducer,
    programmingLanguage: programmingLanguageReducer,
    school: schoolReducer,
    temporaryEmployer: temporaryEmployerReducer,
    user: userReducer,
    workTime: workTimeReducer,
    workType: workTypeReducer,
    workExperience: workExperienceReducer,
    employer:employerReducer
})

export default rootReducer;