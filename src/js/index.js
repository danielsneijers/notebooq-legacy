import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import mainStore from 'store/main'
import { getMostRecentNote, getNotesTree } from 'utils/notes'
import { NOTES_ROOT_FOLDER } from 'constants/app'
import routes from './routes'
import '../app.global.css'

const defaultSelectedNotePath = getMostRecentNote(NOTES_ROOT_FOLDER)
const initialState = {
  notes: getNotesTree(NOTES_ROOT_FOLDER, defaultSelectedNotePath)
}
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
