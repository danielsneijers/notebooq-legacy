import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { newEmptyNote } from 'utils/notes'
import mainStore from 'store/main'
import routes from './routes'
import '../app.global.css'

const initialState = JSON.parse(localStorage.getItem('store'))
const emptyState = {
  notes: [ newEmptyNote(1) ]
}
const store = mainStore(initialState || emptyState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
