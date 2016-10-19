import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { LOCAL_STORAGE_KEY } from 'constants/app'
import mainStore from 'store/main'
import routes from './routes'
import '../app.global.css'

const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
const store = mainStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
