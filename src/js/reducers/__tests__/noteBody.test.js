import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import noteBody from '../noteBody'

describe('reducers > noteBody', () => {
  it('returns an action object with the correct payload', () => {
    const emptyState = {}
    const state = { copy: 'Some inspiring text, you should read it' }
    const expectedResult = { copy: 'Some inspiring text, you should read it' }
    const action = {
      type: 'SAVE_COPY',
      payload: 'Some inspiring text, you should read it'
    }

    deepFreeze(emptyState)
    deepFreeze(state)

    expect(noteBody(emptyState, action)).to.deep.equal(expectedResult)
    expect(noteBody(state, action)).to.deep.equal(expectedResult)
  })

  it('returns the current state when unknow actions is fired', () => {
    const state = { copy: 'Some inspiring text, you should read it' }
    const expectedResult = { copy: 'Some inspiring text, you should read it' }
    const action = {
      type: 'YOLO',
      payload: 'This should not be added to the state'
    }

    deepFreeze(state)

    expect(noteBody(state, action)).to.deep.equal(expectedResult)
  })

  it('uses the default state when none provided', () => {
    const action = {}

    expect(noteBody(undefined, action)).to.deep.equal({})
  })
})
