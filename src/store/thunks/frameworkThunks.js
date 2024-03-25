import FrameworkService from "../../services/frameworkService"
import { addFrameworkError, addFrameworkSuccess, setFrameworksByJobSeekerIdError, setFrameworksByJobSeekerIdSuccess } from "../actions/frameworkActions"


export const addFramework = (values) => {

    return async (dispatch) => {
        try {
            const response = await new FrameworkService().addFramework(values)
            dispatch(addFrameworkSuccess(response.data.data))
            dispatch(getAllFrameworkJobSeekerId(values.jobSeekerId))
            console.log(response.data.message)
            console.log(response.data.success)
        } catch (error) {
            dispatch(addFrameworkError(error))
            console.log('kayıt hatası', error)
        }
    }
}

export const getAllFrameworkJobSeekerId = (values) => {

    return async (dispatch) => {
        try {
            const response = await new FrameworkService().getFrameworkJobSeekerId(values)
            dispatch(setFrameworksByJobSeekerIdSuccess(response.data.data))
            console.log("API Yanıtı - Başarı:", response.data.success);
            console.log("API Yanıtı - Mesaj:", response.data.message);
        } catch (error) {
            dispatch(setFrameworksByJobSeekerIdError(error))
            console.log('kayıt hatası', error)
        }
    }
}