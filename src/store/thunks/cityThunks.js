import { setCities } from "../actions/cityActions";
import CitiesService from "../../services/citiesService";


export const fetchCities =()=> async (dispatch)=>{
    try{
        const cities = await new CitiesService().getAllCities()
        dispatch(setCities(cities.data.data))
    }catch(error){
        console.error('Şehirleri alma hatası',error)
    }
}