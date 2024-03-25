export const ADD_USER_SUCCESS='ADD_USER_SUCCESS'
export const ADD_USER_ERROR='ADD_USER_ERROR'
export const GET_ALL_USER_SUCCESS='GET_ALL_USER_SUCCESS'
export const GET_ALL_USER_ERROR='GET_ALL_USER_ERROR'


export const addUserSuccess=(data)=>({
    type:ADD_USER_SUCCESS,
    payload:data
})

export const addUserError=(error)=>({
    type:ADD_USER_ERROR,
    payload:error
})
export const getAllUserSuccess=(users)=>({
    type:GET_ALL_USER_SUCCESS,
    payload:users
})
export const getAllUserError=(error)=>({
    type:GET_ALL_USER_ERROR,
    payload:error
})