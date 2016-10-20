import { expect } from 'chai'
import { spy, useFakeTimers } from 'sinon'
import { createStore, applyMiddleware } from 'redux'
import localStorageMiddleware from 'store/localStorageMiddleware'

describe('store > localStorageMiddleware', () => {
  let store
  let clock

  beforeEach(() => {
    let increment = 0
    const persistence = localStorageMiddleware()
    const createStoreWithMiddleware = applyMiddleware(persistence)(createStore)
    const initialState = {}
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'UPDATE': {
          return {
            ...state,
            increment: increment + 1
          }
        }
        default: {
          return state
        }
      }
    }

    clock = useFakeTimers()
    store = createStoreWithMiddleware(reducer, initialState)

    spy(store, 'dispatch')
    spy(global, 'setTimeout')
    spy(global, 'clearTimeout')
  })

  describe('debounced action is fired many times', () => {
    beforeEach(() => {
      const action = {
        type: 'UPDATE',
        debounceSync: 300
      }

      store.dispatch(action)
      store.dispatch(action)
      store.dispatch(action)
    })

    it('clearTimeout is called thrice', () => {
      expect(global.clearTimeout.calledThrice).to.be.true
    })

    it('dispatch is called thrice', () => {
      expect(store.dispatch.calledThrice).to.be.true
    })

    it(`state will only update once per 300 ms`, () => {
      clock.tick(300)
      expect(store.getState()).to.deep.equal({ increment: 1 })
    })
  })
})
