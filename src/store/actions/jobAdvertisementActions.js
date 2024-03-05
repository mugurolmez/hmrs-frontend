export const ADD_JOB_ADVERTISEMENT_SUCCESS = 'ADD_JOB_ADVERTISEMENT_SUCCESS'
export const ADD_JOB_ADVERTISEMENT_ERROR = 'ADD_JOB_ADVERTISEMENT_ERROR'


export const AddJobAdverisementSuccess = (data) => ({
   
    type: ADD_JOB_ADVERTISEMENT_SUCCESS,
    payload: data
})

export const AddJobAdverisementError = (error) => ({
    type: ADD_JOB_ADVERTISEMENT_SUCCESS,
    payload: error
})