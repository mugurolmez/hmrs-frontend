export const ADD_LINKEDIN_SUCCESS = 'ADD_LINKEDIN_SUCCESS'
export const ADD_LINKEDIN_ERROR = 'ADD_LINKEDIN_ERROR'
export const GET_JOBSEEKER_LINKEDIN_SUCCESS='GET_JOBSEEKER_LINKEDIN_SUCCESS'
export const GET_JOBSEEKER_LINKEDIN_ERROR='GET_JOBSEEKER_LINKEDIN_ERROR'


export const addLinkedinSucces = (data) => ({
    type: ADD_LINKEDIN_SUCCESS,
    payload: data
})

export const addLinkedinError = (error) => ({
    type: ADD_LINKEDIN_ERROR,
    payload: error
})

export const getJobSeekerLinkedinSuccess = (languages) => ({
    type: GET_JOBSEEKER_LINKEDIN_SUCCESS,
    payload: languages
})

export const getJobSeekerLinkedinError = (error) => ({
    type: GET_JOBSEEKER_LINKEDIN_ERROR,
    payload: error
})