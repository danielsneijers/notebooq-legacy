import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import mainStore from 'store/main'
import { getMostRecentNote, getNotesTree, noteFromTemplate } from 'utils/notes'
import { NOTES_ROOT_FOLDER } from 'constants/app'
import routes from './routes'
import '../app.global.css'

const activeNotePath = getMostRecentNote(NOTES_ROOT_FOLDER)
const initialState = {
  list: getNotesTree(NOTES_ROOT_FOLDER),
  activeNote: noteFromTemplate(NOTES_ROOT_FOLDER, activeNotePath)
}
const store = mainStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
