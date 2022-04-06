import { GET_CITIES, GET_CITIES_ATTRACTIONS } from '../types'
import { GetCities } from '../../services/CitiesAttracService'



export const LoadCities = () => {
    return async (dispatch) => {
        try {
            const cities = await GetCities()
            dispatch({
                type: GET_CITIES,
                payload:cities
            })
        } catch (error) {
            throw error
        }
    }
}