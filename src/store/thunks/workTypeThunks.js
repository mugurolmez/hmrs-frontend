import WorkTypeService from "../../services/workTypeService";
import { addWorkTypeError, addWorkTypeSuccess, setWorkTypes } from "../actions/workTypeActions";


export const fetchWorkTypes = () => async (dispatch) => {
    try {
        const workTypes = await new WorkTypeService().getAllWorkType()
        dispatch(setWorkTypes(workTypes.data.data))
    } catch (error) {
        console.error('Çalışma Şekli alma hatası', error)
    }
}

export const addWorkType=(values)=>async(dispatch)=>{
    try{
        const response=await new WorkTypeService().AddWorkType(values)
        dispatch(addWorkTypeSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addWorkTypeError(error))
    }
}