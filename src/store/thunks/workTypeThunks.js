import WorkTypeService from "../../services/workTypeService";
import { SetWorkTypes } from "../actions/workTypeActions";


export const fetchWorkTypes = () => async (dispatch) => {
    try {
        const workTypes = await new WorkTypeService().getAllWorkType()
        dispatch(SetWorkTypes(workTypes.data.data))
    } catch (error) {
        console.error('Çalışma Şekli alma hatası', error)
    }
}