export const ADD_HRMS_PERSON_SUCCES='ADD_HRMS_PERSON_SUCCES'
export const ADD_HRMS_PERSON_ERROR='ADD_HRMS_PERSON_SUCCES'


export const addHrmsPersonSucces=(data)=>({
    type:ADD_HRMS_PERSON_SUCCES,
    Payload:data
})


export const addHrmsPersonError=(error)=>({
    type:ADD_HRMS_PERSON_ERROR,
    Payload:error
})
