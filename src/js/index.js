import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import mainStore from 'store/main'
import { getTitleFromFilePath, getFileContents } from 'utils/file'
import { getMostRecentNote } from 'utils/notes'
import { NOTES_ROOT_FOLDER } from 'constants/app'
import routes from './routes'
import '../app.global.css'

const initialNotePath = getMostRecentNote(NOTES_ROOT_FOLDER)
const initialState = {
  note: {
    path: initialNotePath,
    title: getTitleFromFilePath(initialNotePath),
    copy: getFileContents(initialNotePath)
  }
}
const store = mainStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
