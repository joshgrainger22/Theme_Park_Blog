import { GET_CITIES, GET_CITIES_ATTRACTIONS } from '../types'
import { GetCities, GetAttractions, createComments } from '../../services/CitiesAttracService'


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


// export const CreateCommentsAction = (commentsData) => {
//   return dispatch => {
//       createComments().then((res) => {
//         console.log(res.data);
//       })
//   }
// }