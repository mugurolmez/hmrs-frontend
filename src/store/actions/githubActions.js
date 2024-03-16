export const ADD_GITHUB_SUCCES = 'ADD_GITHUB_SUCCES'
export const ADD_GITHUB_ERROR = 'ADD_GITHUB_ERROR'
export const GET_JOBSEEKER_GITHUB_SUCCESS='GET_JOBSEEKER_GITHUB_SUCCESS'
export const GET_JOBSEEKER_GITHUB_ERROR='GET_JOBSEEKER_GITHUB_ERROR'


export const addGithubSucces = (data) => ({
    type: ADD_GITHUB_SUCCES,
    payload: data
})

export const addGithubError = (error) => ({
    type: ADD_GITHUB_ERROR,
    payload: error
})

export const getJobSeekerGithubSuccess = (data) => ({
    type: GET_JOBSEEKER_GITHUB_SUCCESS,
    payload: data
})

export const getJobSeekerGithubError = (error) => ({
    type: GET_JOBSEEKER_GITHUB_ERROR,
    payload: error
})