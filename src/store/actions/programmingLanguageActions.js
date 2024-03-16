export const ADD_PROGRAMMING_LANGUAGE_SUCCESS = "ADD_PROGRAMMING_LANGUAGE_SUCCESS"
export const ADD_PROGRAMMING_LANGUAGE_ERROR = "ADD_PROGRAMMING_LANGUAGE_ERROR"
export const GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID_SUCCESS='GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID_SUCCESS'
export const GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID_ERROR='GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID_ERROR'



export const addProgrammingLangugageSuccess=(data)=>({
    
        type: ADD_PROGRAMMING_LANGUAGE_SUCCESS,
        payload: data,
})
export const addProgrammingLangugageError=(error)=>({
    
        type: ADD_PROGRAMMING_LANGUAGE_ERROR,
        payload: error,
})

export const getProgramminglanguagesByJobSeekerIdSuccess=(programmingLanguages)=>({
        type:GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID_SUCCESS,
        payload:programmingLanguages
    })

    export const getProgramminglanguagesByJobSeekerIdError=(error)=>({
        type:GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID_ERROR,
        payload:error
    })
