import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import input from './input'
import noteBody from './noteBody'

const rootReducer = combineReducers({
  input,
  noteBody,
  routing
})

export default rootReducer
