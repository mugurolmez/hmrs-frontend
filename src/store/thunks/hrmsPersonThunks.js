import HrmsPersonService from "../../services/hrmsPersonService"
import { addHrmsPersonError, addHrmsPersonSuccess, getAllHrmsPersonsError, getAllHrmsPersonsSuccess, verifyEmployerError, verifyEmployerSuccess } from "../actions/hrmsPersonActions"
import { getAllTemporaryEployers } from "./temporaryEmployerThunks"


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
        let response
        try {
            response = await new HrmsPersonService().verifyEmployer(values)
            dispatch(verifyEmployerSuccess(response.data))
            console.log(response.data.message)
            console.log(response.data.success)
            dispatch(getAllTemporaryEployers())
        } catch (error) {
            dispatch(verifyEmployerError(error))
        }
    }
}

export const getAllHrmsPersons=()=>{ return async(dispatch)=>{
    try{
        const response=await new HrmsPersonService().getAllHrmsPersons()
        dispatch(getAllHrmsPersonsSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);

    }catch(error){
        dispatch(getAllHrmsPersonsError(error))
        console.log("Hrms Getirme Hatası:");
    }
}
   
}