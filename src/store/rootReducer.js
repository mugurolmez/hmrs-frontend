import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import coverLetterReducer from "./reducers/coverLetterReducer";
import frameworkReducer from "./reducers/FrameworkReducer";
import githubReducer from "./reducers/githubReducer";
import hrmsPersonReducer from "./reducers/hrmsPersonReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import jobDescriptionReducer from "./reducers/jobDescriptionReducer";
import jobSeekerReducer from "./reducers/jobSeekerReducer";
import languageReducer from "./reducers/languageReducer";
import linkedinReducer from "./reducers/linkedinReducer";
import programmingLanguageReducer from "./reducers/programmingLanguageReducer";
import schoolReducer from "./reducers/schoolReducer";
import temporaryEmployerReducer from "./reducers/temporaryEmployerReducer";
import userReducer from "./reducers/userReducer";
import workTimeReducer from "./reducers/workTimeReducer";
import workTypeReducer from "./reducers/workTypeReducer";
import workExperienceReducer from "./reducers/workExperienceReducer";
import employerReducer from "./reducers/employerReducer";
import imageReducer from "./reducers/imageReducer";
import personReducer from "./reducers/personReducer";




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
    employer:employerReducer,
    image:imageReducer,
    person:personReducer
})

export default rootReducer;