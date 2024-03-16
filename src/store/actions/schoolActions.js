export const ADD_SCHOOL_SUCCESS='ADD_SCHOOL_SUCCESS'
export const ADD_SCHOOL_ERROR='ADD_SCHOOL_ERROR'
export const SET_SCHOOL='SET_SCHOOL'


export const addSchoolSuccess=(data)=>({
    type:ADD_SCHOOL_SUCCESS,
    payload:data
})
export const addSchoolError=(error)=>({
    type:ADD_SCHOOL_ERROR,
    payload:error
})
export const setSchool=(schools)=>({
    type:SET_SCHOOL,
    payload:schools
})