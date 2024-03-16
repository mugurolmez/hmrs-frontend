export const ADD_HRMS_PERSON_SUCCESS='ADD_HRMS_PERSON_SUCCESS'
export const ADD_HRMS_PERSON_ERROR='ADD_HRMS_PERSON_SUCCES'
export const VERIFY_EPMLOYER_SUCCESS='VERIFY_EPMOYER_SUCCESS'
export const VERIFY_EPMLOYER_ERROR='VERIFY_EPMOYER_ERROR'


export const addHrmsPersonSuccess=(data)=>({
    type:ADD_HRMS_PERSON_SUCCESS,
    payload:data
})

export const addHrmsPersonError=(error)=>({
    type:ADD_HRMS_PERSON_ERROR,
    payload:error
})

export const verifyEmployerSuccess=(data)=>({
    type:VERIFY_EPMLOYER_SUCCESS,
    payload:data
})
export const verifyEmployerError=(error)=>({
    type:VERIFY_EPMLOYER_ERROR,
    payload:error
})