import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import input from './input'

const rootReducer = combineReducers({
  input,
  routing
})

export default rootReducer
