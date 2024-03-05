import HrmsPersonService from "../../services/hrmsPersonService"
import { addHrmsPersonSucces,addHrmsPersonError } from "../actions/hrmsPersonActions"

export const AddHrmsPerson=(values)=>{
let response
return async (dispatch)=>{
    try{
       response= await new HrmsPersonService().addHrmsPerson(values)
        dispatch(addHrmsPersonSucces(response.data))
        console.log(response.data.message)
        console.log(response.data.success)

    }catch(error){
            dispatch(addHrmsPersonError(error))
            console.log('kayıt hatası'.error)

    }
}


}