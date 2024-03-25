export const ADD_HRMS_PERSON_SUCCESS='ADD_HRMS_PERSON_SUCCESS'
export const ADD_HRMS_PERSON_ERROR='ADD_HRMS_PERSON_SUCCES'
export const VERIFY_EPMLOYER_SUCCESS='VERIFY_EPMOYER_SUCCESS'
export const VERIFY_EPMLOYER_ERROR='VERIFY_EPMOYER_ERROR'
export const GET_ALL_HRMS_PERSONS_SUCCESS='GET_ALL_HRMS_PERSONS_SUCCESS'
export const GET_ALL_HRMS_PERSONS_ERROR='GET_ALL_HRMS_PERSONS_ERROR'


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
export const getAllHrmsPersonsSuccess=(hrmsPersons)=>({
    type:GET_ALL_HRMS_PERSONS_SUCCESS,
    payload:hrmsPersons
})
export const getAllHrmsPersonsError=(error)=>({
    type:GET_ALL_HRMS_PERSONS_ERROR,
    payload:error
})
