const { GET_CITIES_ATTRACTIONS } = require('../types')

const initialState = {
  attractions: []
}

const GetAttractionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_ATTRACTIONS:
      return { ...state, attractions: action.payload }
    default:
      return { ...state }
  }
}

export default GetAttractionsReducer
