import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppContainer from 'containers/AppContainer'
import MarkdownViewContainer from 'containers/MarkdownViewContainer'

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={MarkdownViewContainer} />
  </Route>
)
