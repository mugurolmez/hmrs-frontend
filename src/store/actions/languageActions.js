export const ADD_LANGUAGE_SUCCESS='ADD_LANGUAGE_SUCCESS'
export const ADD_LANGUAGE_ERROR='ADD_LANGUAGE_ERROR'
export const SET_LANGUAGES='SET_LANGUAGES'



export const setLanguages=(languages)=>({
    type:SET_LANGUAGES,
    payload:languages
})
export const addLanguageSuccess=(data)=>({
    type:ADD_LANGUAGE_SUCCESS,
    payload:data
})
export const addLanguageError=(error)=>({
    type:ADD_LANGUAGE_ERROR,
    payload:error
})