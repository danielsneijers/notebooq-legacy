import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppWrapper from 'components/AppWrapper'
import NoteContainer from 'containers/NoteContainer'

export default (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={NoteContainer} />
  </Route>
)
