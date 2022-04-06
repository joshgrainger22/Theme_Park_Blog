import { GET_CITIES, GET_CITIES_ATTRACTIONS } from '../types'
import { GetCities } from '../../services/CitiesAttracService'
import { GetAttractions } from '../../services/CitiesAttracService'

export const LoadCities = () => {
  return async (dispatch) => {
    try {
      const cities = await GetCities()
      //console.log(cities)
      dispatch({
        type: GET_CITIES,
        payload: cities.cities
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadAttractions = () => {
  return async (dispatch) => {
    try {
      const attractions = await GetAttractions()
      dispatch({
        type: GET_CITIES_ATTRACTIONS,
        payload: attractions.attractions
      })
    } catch (error) {
      throw error
    }
  }
}
