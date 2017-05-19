import { combineReducers } from 'redux'
import counter from './counter'
import map from './map'
import list from './list'

const rootReducer = combineReducers({
  counter,
  map,
  list
})

export default rootReducer
