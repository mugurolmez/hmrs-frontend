export const ADD_USER_SUCCESS='ADD_USER_SUCCESS'
export const ADD_USER_ERROR='ADD_USER_ERROR'
export const SET_USERS='SET_USERS'



export const addUserSucces=(data)=>({
    type:ADD_USER_SUCCESS,
    payload:data
})

export const addUserError=(error)=>({
    type:ADD_USER_ERROR,
    payload:error
})
export const setUser=(users)=>({
    type:SET_USERS,
    payload:users
})