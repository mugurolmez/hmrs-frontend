export const SET_WORK_TYPES='SET_WORKTYPES'
export const ADD_WORK_TYPE_SUCCESS='ADD_WORK_TYPE_SUCCESS'
export const ADD_WORK_TYPE_ERROR='ADD_WORK_TYPE_ERROR'

export const setWorkTypes=(workTypes)=>( {
    type: SET_WORK_TYPES,
    payload: workTypes,
})

export const addWorkTypeSuccess=(data)=>({
    type:ADD_WORK_TYPE_SUCCESS,
    payload:data
}) 

export const addWorkTypeError=(error)=>({
    type:ADD_WORK_TYPE_ERROR,
    payload:error
})