import { expect } from 'chai'
import { mockState } from 'test/fixtures'
import view from '../view'

describe('reducers > view', () => {
  it('returns an action object with the correct payload when toggling markdown view', () => {
    const action = { type: 'TOGGLE_MARKDOWN_VIEW' }
    const expectedResult = { markdown: false }

    expect(view(mockState.view, action)).to.deep.equal(expectedResult)
  })

  it('returns the current state when unknow actions is fired', () => {
    const action = {
      type: 'YOLO',
      payload: 'This should not modify the state'
    }

    expect(view(mockState.view, action)).to.deep.equal(mockState.view)
  })

  it('uses the default state when none provided', () => {
    const action = {}

    expect(view(undefined, action)).to.deep.equal(mockState.view)
  })
})
