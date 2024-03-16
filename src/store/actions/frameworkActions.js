export const ADD_FRAMEWORK_SUCCESS = 'ADD_FRAMEWORK_SUCCESS';
export const ADD_FRAMEWORK_ERROR = 'ADD_FRAMEWORK_ERROR';
export const SET_FRAMEWORKS_BY_JOBSEEKERID_SUCCESS='SET_FRAMEWORKS_BY_JOBSEEKERID_SUCCESS'
export const SET_FRAMEWORKS_BY_JOBSEEKERID_ERROR='SET_FRAMEWORKS_BY_JOBSEEKERID_ERROR'

export const addFrameworkSuccess = (data) => ({
  type: ADD_FRAMEWORK_SUCCESS,
  payload: data
});

export const addFrameworkError = (error) => ({
  type: ADD_FRAMEWORK_ERROR,
  payload: error
});

export const setFrameworksByJobSeekerIdSuccess = (frameworks) => ({
  type: SET_FRAMEWORKS_BY_JOBSEEKERID_SUCCESS,
  payload: frameworks
});

export const setFrameworksByJobSeekerIdError = (error) => ({
  type: SET_FRAMEWORKS_BY_JOBSEEKERID_ERROR,
  payload: error
});