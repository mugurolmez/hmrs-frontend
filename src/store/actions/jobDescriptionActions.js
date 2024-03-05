export const SET_JOBDESCRIPTIONS='SET_JOBDESCRIPTIONS'
export const ADD_JOB_DESCRIPTION_SUCCESS='ADD_JOB_DESCRIPTION_SUCCESS'
export const ADD_JOB_DESCRIPTION_ERROR='ADD_JOB_DESCRIPTION_ERROR'

export const setJobDescriptions=(jobDescriptions)=>( {

    type: SET_JOBDESCRIPTIONS,
    payload: jobDescriptions,

})

export const AddJobDescriptionsSuccess=(data)=>( {

    type: ADD_JOB_DESCRIPTION_SUCCESS,
    payload: data,

})
export const AddJobDescriptionsError=(error)=>( {

    type: ADD_JOB_DESCRIPTION_ERROR,
    payload: error,

})