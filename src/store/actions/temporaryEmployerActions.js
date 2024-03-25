export const ADD_TEMPORARY_EMPLOYER_SUCCESS='ADD_TEMPORARY_EMPLOYER_SUCCESS'
export const ADD_TEMPORARY_EMPLOYER_ERROR='ADD_TEMPORARY_EMPLOYER_ERROR'
export const GET_ALL_TEMPORARY_EMPLOYER_SUCCESS='GET_ALL_TEMPORARY_EMPLOYER_SUCCESS'
export const GET_ALL_TEMPORARY_EMPLOYER_ERROR='GET_ALL_TEMPORARY_EMPLOYER_ERROR'

export const addTemporaryEmployerSuccess=(data)=>({
    type:ADD_TEMPORARY_EMPLOYER_SUCCESS,
    payload:data
})
export const addTemporaryEmployerError=(error)=>({
    type:ADD_TEMPORARY_EMPLOYER_ERROR,
    payload:error
})

export const getAllTemporaryEmployerSuccess=(temporaryEmployers)=>({
    type:GET_ALL_TEMPORARY_EMPLOYER_SUCCESS,
    payload:temporaryEmployers
})

export const getAllTemporaryEmployerError=(error)=>({
    type:GET_ALL_TEMPORARY_EMPLOYER_ERROR,
    payload:error
})