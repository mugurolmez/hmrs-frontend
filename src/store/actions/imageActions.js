export const ADD_IMAGE_SUCCESS='ADD_IMAGE_SUCCESS'
export const ADD_IMAGE_ERROR='ADD_IMAGE_ERROR'
export const GET_ALL_IMAGES_SUCCCESS='GET_ALL_IMAGES_SUCCCESS'
export const GET_ALL_IMAGES_ERROR='GET_ALL_IMAGES_ERROR'
export const DELETE_IMAGE_SUCCESS='DELETE_IMAGE_SUCCESS'
export const DELETE_IMAGE_ERROR='DELETE_IMAGE_ERROR'

export const addImageSuccess=(imageData)=>({
    type:ADD_IMAGE_SUCCESS,
    payload:imageData
})

export const addImageError=(error)=>({
    type:ADD_IMAGE_ERROR,
    payload:error
})

export const getAllImagesSuccess=(images)=>({
    type:GET_ALL_IMAGES_SUCCCESS,
    payload:images
})

export const getAllImagesError=(error)=>({
    type:GET_ALL_IMAGES_ERROR,
    payload:error
})

export const deleteImageSuccess=(images)=>({
    type:DELETE_IMAGE_SUCCESS,
    payload:images
})

export const deleteImageError=(error)=>({
    type:DELETE_IMAGE_ERROR,
    payload:error
})

