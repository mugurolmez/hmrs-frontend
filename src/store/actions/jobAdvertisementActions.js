export const ADD_JOB_ADVERTISEMENT_SUCCESS = 'ADD_JOB_ADVERTISEMENT_SUCCESS'
export const ADD_JOB_ADVERTISEMENT_ERROR = 'ADD_JOB_ADVERTISEMENT_ERROR'
export const GET_ALL_ACTIVE_JOB_ADVERTISEMENT_SUCCESS = 'GET_ALL_ACTIVE_JOB_ADVERTISEMENT_SUCCESS'
export const GET_ALL_ACTIVE_JOB_ADVERTISEMENT_ERROR = 'GET_ALL_ACTIVE_JOB_ADVERTISEMENT_ERROR'
export const GET_ALL_PASSIVE_JOB_ADVERTISEMENT_SUCCESS = 'GET_ALL_PASSIVE_JOB_ADVERTISEMENT_SUCCESS'
export const GET_ALL_PASSIVE_JOB_ADVERTISEMENT_ERROR = 'GET_ALL_PASSIVE_JOB_ADVERTISEMENT_ERROR'


export const addJobAdverisementSuccess = (data) => ({
    type: ADD_JOB_ADVERTISEMENT_SUCCESS,
    payload: data
})

export const addJobAdverisementError = (error) => ({
    type: ADD_JOB_ADVERTISEMENT_ERROR,
    payload: error
})

export const getAllActiveJobAdvertisementSuccess = (data) => ({
    type: GET_ALL_ACTIVE_JOB_ADVERTISEMENT_SUCCESS,
    payload: data
})

export const getAllActiveJobAdvertisementError = (error) => ({
    type: GET_ALL_ACTIVE_JOB_ADVERTISEMENT_ERROR,
    payload: error
})

export const getAllPassiveJobAdvertisementSuccess = (data) => ({
    type: GET_ALL_ACTIVE_JOB_ADVERTISEMENT_SUCCESS,
    payload: data
})

export const getAllPassiveJobAdvertisementError = (error) => ({
    type: GET_ALL_ACTIVE_JOB_ADVERTISEMENT_ERROR,
    payload: error
})