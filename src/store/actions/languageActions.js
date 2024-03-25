export const ADD_LANGUAGE_SUCCESS='ADD_LANGUAGE_SUCCESS'
export const ADD_LANGUAGE_ERROR='ADD_LANGUAGE_ERROR'
export const SET_LANGUAGES='SET_LANGUAGES'
export const GET_JOBSEEKER_LANGUAGES_SUCCESS='GET_JOBSEEKER_LANGUAGES_SUCCESS'
export const GET_JOBSEEKER_LANGUAGES_ERROR='GET_JOBSEEKER_LANGUAGES_ERROR'


export const getJobSeekerLanguagesSuccess=(languages)=>({
    type:GET_JOBSEEKER_LANGUAGES_SUCCESS,
    payload:languages
})
export const getJobSeekerLanguagesError=(error)=>({
    type:GET_JOBSEEKER_LANGUAGES_ERROR,
    payload:error
})
export const addLanguageSuccess=(data)=>({
    type:ADD_LANGUAGE_SUCCESS,
    payload:data
})
export const addLanguageError=(error)=>({
    type:ADD_LANGUAGE_ERROR,
    payload:error
})