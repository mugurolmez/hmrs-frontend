
export const GET_ALL_JOBDESCRIPTIONS_SUCCESS='GET_ALL_JOBDESCRIPTIONS_SUCCESS'
export const GET_ALL_JOBDESCRIPTIONS_ERROR='GET_ALL_JOBDESCRIPTIONS_ERROR'
export const ADD_JOB_DESCRIPTION_SUCCESS='ADD_JOB_DESCRIPTION_SUCCESS'
export const ADD_JOB_DESCRIPTION_ERROR='ADD_JOB_DESCRIPTION_ERROR'
export const GET_JOBDESCRIPTION_BY_ID_SUCCESS='GET_JOBDESCRIPTION_BY_ID_SUCCESS'
export const GET_JOBDESCRIPTION_BY_ID_ERROR='GET_JOBDESCRIPTION_BY_ID_ERROR'



export const getJobDescriptionByIdSuccess=(jobDescription)=>({
    type: GET_JOBDESCRIPTION_BY_ID_SUCCESS,
    payload: jobDescription,
})

export const getJobDescriptionByIdError=(error)=>({
    type: GET_JOBDESCRIPTION_BY_ID_ERROR,
    payload: error,
})

export const getAllJobDescriptionsSuccess=(jobDescriptions)=>( {
    type: GET_ALL_JOBDESCRIPTIONS_SUCCESS,
    payload: jobDescriptions,
})

export const getAllJobDescriptionsError=(error)=>( {
    type: GET_ALL_JOBDESCRIPTIONS_ERROR,
    payload: error,
})

export const addJobDescriptionsSuccess=(data)=>( {
    type: ADD_JOB_DESCRIPTION_SUCCESS,
    payload: data,
})

export const addJobDescriptionsError=(error)=>( {
    type: ADD_JOB_DESCRIPTION_ERROR,
    payload: error,
})