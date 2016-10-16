import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import notes from './notes'
import view from './view'

const rootReducer = combineReducers({
  notes,
  view,
  routing
})

export default rootReducer
