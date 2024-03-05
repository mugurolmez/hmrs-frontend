export const ADD_JOBSEEKER_SUCCESS = 'ADD_JOBSEEKER_SUCCESS'
export const ADD_JOBSEEKER_ERROR = 'ADD_JOBSEEKER_ERROR'
export const SET_JOBSEEKERS = 'SET_JOBSEEKERS'



export const setJobSeekers = (jobSeekers) => ({
    type: SET_JOBSEEKERS,
    payload: jobSeekers
})
export const addJobseekerSuccess = (data) => ({
    type: ADD_JOBSEEKER_SUCCESS,
    payload: data
})
export const addJobseekerError = (error) => ({
    type: ADD_JOBSEEKER_ERROR,
    payload: error
})