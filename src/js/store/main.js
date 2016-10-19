import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import localStorageMiddleware from './localStorageMiddleware'
import rootReducer from 'reducers'

const router = routerMiddleware(hashHistory)
const persistence = localStorageMiddleware({
  log: true,
  key: 'store',
  wait: 2000
})
const logger = createLogger({
  duration: true,
  collapsed: true
})

console.log(localStorageMiddleware)

const enhancer = applyMiddleware(logger, persistence, thunk, router)

export default function mainStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }

  return store
}
