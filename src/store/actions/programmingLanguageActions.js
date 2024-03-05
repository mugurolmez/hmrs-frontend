export const ADD_TO_PROGRAMINGLANGUAGE = "ADD_TO_PROGRAMINGLANGUAGE"
export const SET_PROGRAMMING_LANGUAGES = 'SET_PROGRAMMING_LANGUAGES';
export const SET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID='GET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID'


export const addProgrammingLanguage=(programmingLanguage)=>({
    
        type: ADD_TO_PROGRAMINGLANGUAGE,
        payload: programmingLanguage,
})

export const setProgramminglanguagesByJobSeekerId=(jobSeekerId)=>({
        type:SET_PROGRAMMING_LANGUAGES_BY_JOBSEEKERID,
        payload:jobSeekerId
    })

