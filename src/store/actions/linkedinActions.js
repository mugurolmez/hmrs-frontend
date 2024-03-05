export const ADD_LINKEDIN_SUCCESS = 'ADD_LINKEDIN_SUCCESS'
export const ADD_LINKEDIN_ERROR = 'ADD_LINKEDIN_ERROR'



export const addLinkedinSucces = (data) => ({
    type: ADD_LINKEDIN_SUCCESS,
    payload: data
})

export const addLinkedinError = (error) => ({
    type: ADD_LINKEDIN_ERROR,
    payload: error
})