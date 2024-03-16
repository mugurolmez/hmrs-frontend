export const ADD_WORK_EXPERIENCE_SUCCESS='ADD_WORK_EXPERIENCE_SUCCESS'
export const ADD_WORK_EXPERIENCE_ERROR='ADD_WORK_EXPERIENCE_ERROR'
export const SET_WORK_EXPERIENCE='SET_WORK_EXPERIENCE'



export const addWorkExperienceSucces=(data)=>({
    type:ADD_WORK_EXPERIENCE_SUCCESS,
    payload:data

})
export const addWorkExperienceError=(error)=>({
    type:ADD_WORK_EXPERIENCE_SUCCESS,
    payload:error

})
export const setWorkExperience=(workExperiences)=>({
    type:SET_WORK_EXPERIENCE,
    payload:workExperiences

})