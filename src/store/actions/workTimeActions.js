export const SET_WORKTIMES='SET_WORKTIMES'
export const ADD_WORKTIME_SUCCESS='ADD_WORKTIME_SUCCESS'
export const ADD_WORKTIME_ERROR='ADD_WORKTIME_ERROR'

export const setWorkTimes=(workTimes)=>( {
    type: SET_WORKTIMES,
    payload: workTimes,
})

export const addWorkTimeSuccess=(data)=>( {
    type: ADD_WORKTIME_SUCCESS,
    payload: data,
})

export const addWorkTimeError=(error)=>( {
    type: ADD_WORKTIME_ERROR,
    payload: error,
})