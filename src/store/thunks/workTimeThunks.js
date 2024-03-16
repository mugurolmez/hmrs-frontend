import WorkTimeService from "../../services/workTimeService"
import { addWorkTimeError, addWorkTimeSuccess, setWorkTimes } from "../actions/workTimeActions"


export const fetchWorkTimes = () => async (dispatch) => {
    try {
        const workTimes = await new WorkTimeService().getAllWorkTime()
        dispatch(setWorkTimes(workTimes.data.data))
    } catch (error) {
        console.error('Çalışma Zamanı alma hatası', error)
    }
}
export const addWorkTime=(values)=>async(dispatch)=>{
    try{
        const response= await new WorkTimeService().AddWorkTime(values)
        dispatch(addWorkTimeSuccess(response.data.data))
        console.log("API Yanıtı - Başarı:", response.data.success);
        console.log("API Yanıtı - Mesaj:", response.data.message);
    }catch(error){
        dispatch(addWorkTimeError(error))
    }
}