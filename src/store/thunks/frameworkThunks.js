import FrameworkService from "../../services/frameworkService"
import { addFrameworkError, addFrameworkSucces } from "../actions/frameworkActions"



export const addFramework = (values) => {

    return async (dispatch) => {
        try {
            const response = await new FrameworkService().addFramework(values)
            dispatch(addFrameworkSucces(response.data))
            console.log(response.data.message)
            console.log(response.data.success)
        } catch (error) {
            dispatch(addFrameworkError(error))
            console.log('kayıt hatası', error)
        }
    }
}