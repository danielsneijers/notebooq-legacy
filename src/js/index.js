import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import mainStore from 'store/main'
import routes from './routes'
import '../app.global.css'

const initialState = { notes: JSON.parse(localStorage.getItem('notes')) }

console.log('%c state ', 'background-color:#f1c40f; color: white; font-weight: bold; padding: 4px 0;')
console.log(initialState)

const store = mainStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
