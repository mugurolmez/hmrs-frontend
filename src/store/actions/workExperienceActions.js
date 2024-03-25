export const ADD_WORK_EXPERIENCE_SUCCESS='ADD_WORK_EXPERIENCE_SUCCESS'
export const ADD_WORK_EXPERIENCE_ERROR='ADD_WORK_EXPERIENCE_ERROR'
export const GET_JOB_SEEKER_WORKEXPERIENCES_SUCCESS='GET_JOB_SEEKER_WORKEXPERIENCES_SUCCESS'
export const GET_JOB_SEEKER_WORKEXPERIENCES_ERROR='GET_JOB_SEEKER_WORKEXPERIENCES_ERROR'
export const SET_WORK_EXPERIENCE='SET_WORK_EXPERIENCE'



export const addWorkExperienceSuccess=(data)=>({
    type:ADD_WORK_EXPERIENCE_SUCCESS,
    payload:data

})
export const addWorkExperienceError=(error)=>({
    type:ADD_WORK_EXPERIENCE_SUCCESS,
    payload:error

})
export const getJobSeekerWorkexperiencesSuccess=(data)=>({
    type:GET_JOB_SEEKER_WORKEXPERIENCES_SUCCESS,
    payload:data

})
export const getJobSeekerWorkexperiencesError=(error)=>({
    type:GET_JOB_SEEKER_WORKEXPERIENCES_ERROR,
    payload:error

})