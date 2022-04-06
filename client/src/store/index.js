import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import GetAttractionsReducer from './reducers/AttractionReducers'
import CityReducer from './reducers/CityReducers'

const store = createStore(
  combineReducers({
    attractionState: GetAttractionsReducer,
    cityState: CityReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
