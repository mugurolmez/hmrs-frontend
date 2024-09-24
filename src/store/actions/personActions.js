
export const ADD_PERSON_SUCCESS='ADD_PERSON_SUCCESS'
export const ADD_PERSON_ERROR='ADD_PERSON_ERROR'
export const GET_ALL_PERSON_SUCCESS='GET_ALL_PERSON_SUCCESS'
export const GET_ALL_PERSON_ERROR='GET_ALL_PERSON_ERROR'



export const addPersonSuccess=(data)=>({
    type:ADD_PERSON_SUCCESS,
    payload:data
})

export const addPersonError=(error)=>({
    type:ADD_PERSON_ERROR,
    payload:error
})
export const getAllPersonSuccess=(persons)=>({
    type:GET_ALL_PERSON_SUCCESS,
    payload:persons
})

export const getAllPersonError=(error)=>({
    type:GET_ALL_PERSON_ERROR,
    payload:error
})