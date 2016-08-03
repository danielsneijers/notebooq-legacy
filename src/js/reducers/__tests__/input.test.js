import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import input from '../input'

describe('reducers > input', () => {
  it('returns an action object with the correct payload', () => {
    const emptyState = {}
    const state = { title: 'Not so nice title' }
    const expectedResult = { title: 'Nice title bro' }
    const action = {
      type: 'SAVE_TITLE',
      payload: 'Nice title bro'
    }

    deepFreeze(emptyState)
    deepFreeze(state)

    expect(input(emptyState, action)).to.deep.equal(expectedResult)
    expect(input(state, action)).to.deep.equal(expectedResult)
  })

  it('returns the current state when unknow actions is fired', () => {
    const state = { title: 'Nice title bro' }
    const expectedResult = { title: 'Nice title bro' }
    const action = {
      type: 'YOLO',
      payload: 'This should not be added to the state'
    }

    deepFreeze(state)

    expect(input(state, action)).to.deep.equal(expectedResult)
  })

  it('uses the default state when none provided', () => {
    const action = {}

    expect(input(undefined, action)).to.deep.equal({})
  })
})
