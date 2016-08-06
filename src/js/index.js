import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import mainStore from 'store/main'
import { getMostRecentNote, getTitleFromFilePath, getFileContents } from 'utils/file'
import { NOTES_ROOT_FOLDER } from 'constants/app'
import routes from './routes'
import '../app.global.css'

const initialNotePath = getMostRecentNote(NOTES_ROOT_FOLDER)
const store = mainStore({
  note: {
    path: initialNotePath,
    title: getTitleFromFilePath(initialNotePath),
    copy: getFileContents(initialNotePath)
  }
})
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
