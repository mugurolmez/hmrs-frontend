export const ADD_COVERLETTER_SUCCESS = 'ADD_COVERLETTER_SUCCES';
export const ADD_COVERLETTER_ERROR = 'ADD_COVERLETTER_ERROR';
export const GET_COVERLETTER_BY_JOB_SEEKER_ID = 'GET_COVERLETTER_BY_JOB_SEEKER_ID';

export const addCoverLetterSuccess = (data) => ({
  type: ADD_COVERLETTER_SUCCESS,
  payload: data
});

export const addCoverLetterError = (error) => ({
  type: ADD_COVERLETTER_ERROR,
  payload: error
});

export const getCoverLetterByJobSeekerId=(coverLetter)=>({
    type:GET_COVERLETTER_BY_JOB_SEEKER_ID,
    payload:coverLetter
})