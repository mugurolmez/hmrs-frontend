export const ADD_GITHUB_SUCCES = 'ADD_GITHUB_SUCCES'
export const ADD_GITHUB_ERROR = 'ADD_GITHUB_ERROR'


export const addGithubSucces = (data) => ({
    type: ADD_GITHUB_SUCCES,
    payload: data
})

export const addGithubError = (error) => ({
    type: ADD_GITHUB_ERROR,
    payload: error
})