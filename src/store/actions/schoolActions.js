export const ADD_SCHOOL_SUCCESS='ADD_SCHOOL_SUCCESS'
export const ADD_SCHOOL_ERROR='ADD_SCHOOL_ERROR'
export const GET_JOBSEEKER_SCHOOLS_SUCCESS='GET_JOBSEEKER_SCHOOLS_SUCCESS'
export const GET_JOBSEEKER_SCHOOLS_ERROR='GET_JOBSEEKER_SCHOOLS_ERROR'


export const addSchoolSuccess=(data)=>({
    type:ADD_SCHOOL_SUCCESS,
    payload:data
})

export const addSchoolError=(error)=>({
    type:ADD_SCHOOL_ERROR,
    payload:error
})

export const getJobSeekerSchoolsSuccess=(schools)=>({
    type:GET_JOBSEEKER_SCHOOLS_SUCCESS,
    payload:schools
})

export const getJobSeekerSchoolsError=(error)=>({
    type:GET_JOBSEEKER_SCHOOLS_ERROR,
    payload:error
})