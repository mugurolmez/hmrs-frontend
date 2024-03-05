export const ADD_FRAMEWORK_SUCCES = 'ADD_FRAMEWORK_SUCCES';
export const ADD_FRAMEWORK_ERROR = 'ADD_FRAMEWORK_ERROR';

export const addFrameworkSucces = (data) => ({
  type: ADD_FRAMEWORK_SUCCES,
  payload: data
});

export const addFrameworkError = (error) => ({
  type: ADD_FRAMEWORK_ERROR,
  payload: error
});
