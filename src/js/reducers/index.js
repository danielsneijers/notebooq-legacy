import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import activeNote from './activeNote'
import list from './list'

const rootReducer = combineReducers({
  activeNote,
  list,
  routing
})

export default rootReducer
