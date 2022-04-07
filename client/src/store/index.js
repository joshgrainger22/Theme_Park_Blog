import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//import GetAttractionsReducer from './reducers/AttractionReducers'
import CityReducer from './reducers/CityReducers'
import PostReducer from './reducers/PostReducer'
import CommentReducer from './reducers/CommentReducer'

const store = createStore(
  combineReducers({
    cityState: CityReducer,
    postState: PostReducer,
    commentState: CommentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
