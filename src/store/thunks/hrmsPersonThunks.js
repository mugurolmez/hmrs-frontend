import HrmsPersonService from "../../services/hrmsPersonService"
import { addHrmsPersonError, addHrmsPersonSuccess, verifyEmployerError, verifyEmployerSuccess } from "../actions/hrmsPersonActions"

export const addHrmsPerson = (values) => {
    let response
    return async (dispatch) => {
        try {
            response = await new HrmsPersonService().addHrmsPerson(values)
            dispatch(addHrmsPersonSuccess(response.data))
            console.log(response.data.message)
            console.log(response.data.success)

        } catch (error) {
            dispatch(addHrmsPersonError(error))
            console.log('kayıt hatası'.error)

        }
    }
}

export const verifyEmployer = (values) => {
    return async (dispatch) => {
        try {
            const response = await new HrmsPersonService().verifyEmployer(values)
            dispatch(verifyEmployerSuccess(response.data))
            console.log(response.data.message)
            console.log(response.data.success)
        } catch (error) {
            dispatch(verifyEmployerError(error))
        }
    }
}