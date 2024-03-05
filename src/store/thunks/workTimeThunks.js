import WorkTimeService from "../../services/workTimeService"
import { SetWorkTimes } from "../actions/workTimeActions"


export const fetchWorkTimes = () => async (dispatch) => {
    try {
        const workTimes = await new WorkTimeService().getAllWorkTime()
        dispatch(SetWorkTimes(workTimes.data.data))
    } catch (error) {
        console.error('Çalışma Zamanı alma hatası', error)
    }
}