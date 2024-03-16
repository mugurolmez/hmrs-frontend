export const ADD_TEMPORARY_EMPLOYER_SUCCESS='ADD_TEMPORARY_EMPLOYER_SUCCESS'
export const ADD_TEMPORARY_EMPLOYER_ERROR='ADD_TEMPORARY_EMPLOYER_ERROR'
export const SET_TEMPORARY_EMPLOYERS='SET_TEMPORARY_EMPLOYERS'



export const addTemporaryEmployerSuccess=(data)=>({
    type:ADD_TEMPORARY_EMPLOYER_SUCCESS,
    payload:data

})
export const addTemporaryEmployerError=(error)=>({
    type:ADD_TEMPORARY_EMPLOYER_ERROR,
    payload:error

})
export const setTemporaryEmployers=(temporaryEmployers)=>({
    type:SET_TEMPORARY_EMPLOYERS,
    payload:temporaryEmployers

})