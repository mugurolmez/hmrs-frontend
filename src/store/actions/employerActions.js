export const SET_EMPLOYERS_SUCCESS='SET_EMPLOYERS_SUCCESS'
export const SET_EMPLOYERS_ERROR='SET_EMPLOYERS_ERROR'



export const setEmployerSuccess=(employers)=>({
    type:SET_EMPLOYERS_SUCCESS,
    payload:employers
})

export const setEmployerError=(error)=>({
    type:SET_EMPLOYERS_ERROR,
    payload:error
})
