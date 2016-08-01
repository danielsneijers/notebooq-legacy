import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounce'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from 'reducers'

const debouncerConfig = { simple: 500 }
const debouncer = createDebounce(debouncerConfig)
const logger = createLogger()
const router = routerMiddleware(hashHistory)
const enhancer = applyMiddleware(thunk, router, debouncer, logger)

export default function mainStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }

  return store
}
