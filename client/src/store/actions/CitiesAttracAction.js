import {
  GET_CITIES,
  GET_CITIES_ATTRACTIONS,
  GET_POSTS,
  GET_COMMENTS
} from '../types'
import {
  GetCities,
  GetAttractions,
  GetAllPosts,
  PostCreateComment,
  PostCreatePost,
  GetAllComments
} from '../../services/CitiesAttracService'

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

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetAllPosts()
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetAllComments()
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}
