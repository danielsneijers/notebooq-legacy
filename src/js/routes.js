import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppContainer from 'containers/AppContainer'
import NoteContainer from 'containers/NoteContainer'

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={NoteContainer} />
  </Route>
)
