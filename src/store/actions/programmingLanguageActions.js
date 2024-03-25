export const ADD_PROGRAMMING_LANGUAGE_SUCCESS = "ADD_PROGRAMMING_LANGUAGE_SUCCESS"
export const ADD_PROGRAMMING_LANGUAGE_ERROR = "ADD_PROGRAMMING_LANGUAGE_ERROR"
export const GET_JOBSEEKER_PROGRAMMING_LANGUAGES_SUCCESS='GET_JOBSEEKER_PROGRAMMING_LANGUAGES_SUCCESS'
export const GET_JOBSEEKER_PROGRAMMING_LANGUAGES_ERROR='GET_JOBSEEKER_PROGRAMMING_LANGUAGES_ERROR'



export const addProgrammingLangugageSuccess=(data)=>({
    
        type: ADD_PROGRAMMING_LANGUAGE_SUCCESS,
        payload: data,
})
export const addProgrammingLangugageError=(error)=>({
    
        type: ADD_PROGRAMMING_LANGUAGE_ERROR,
        payload: error,
})

export const getJobSeekerProgramminglanguagesSuccess=(programmingLanguages)=>({
        type:GET_JOBSEEKER_PROGRAMMING_LANGUAGES_SUCCESS,
        payload:programmingLanguages
    })

    export const getJobSeekerProgramminglanguagesError=(error)=>({
        type:GET_JOBSEEKER_PROGRAMMING_LANGUAGES_ERROR,
        payload:error
    })
