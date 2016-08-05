import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import note from '../note'

describe('reducers > note', () => {
  it('returns an action object with the correct payload when saving a title', () => {
    const emptyState = {}
    const state = { title: 'Not so nice title' }
    const expectedResult = { title: 'Nice title bro' }
    const action = {
      type: 'SAVE_TITLE',
      payload: 'Nice title bro'
    }

    deepFreeze(emptyState)
    deepFreeze(state)

    expect(note(emptyState, action)).to.deep.equal(expectedResult)
    expect(note(state, action)).to.deep.equal(expectedResult)
  })

  it('returns an action object with the correct payload when saving copy', () => {
    const emptyState = {}
    const state = { copy: 'Some inspiring text, you should read it' }
    const expectedResult = { copy: 'Some inspiring text, you should read it' }
    const action = {
      type: 'SAVE_COPY',
      payload: 'Some inspiring text, you should read it'
    }

    deepFreeze(emptyState)
    deepFreeze(state)

    expect(note(emptyState, action)).to.deep.equal(expectedResult)
    expect(note(state, action)).to.deep.equal(expectedResult)
  })

  it('returns the current state when unknow actions is fired', () => {
    const state = { title: 'Nice title bro' }
    const expectedResult = { title: 'Nice title bro' }
    const action = {
      type: 'YOLO',
      payload: 'This should not be added to the state'
    }

    deepFreeze(state)

    expect(note(state, action)).to.deep.equal(expectedResult)
  })

  it('uses the default state when none provided', () => {
    const action = {}

    expect(note(undefined, action)).to.deep.equal({})
  })
})
