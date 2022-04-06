const { GET_CITIES } = require('../types')

const iState = {
    cities: []
}

const CityReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_CITIES:
            return { ...state, cities: action.payload }
        default:
            return { ...state }
    }
}

export default CityReducer