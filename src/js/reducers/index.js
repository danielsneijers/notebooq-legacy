import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import note from './note'
import list from './list'

const rootReducer = combineReducers({
  note,
  list,
  routing
})

export default rootReducer
