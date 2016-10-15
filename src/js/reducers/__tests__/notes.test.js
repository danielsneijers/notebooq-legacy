import Moment from 'moment'
import { expect } from 'chai'
import { stub } from 'sinon'
import { mockState } from '../../__tests__/fixtures'
import notes from '../notes'

describe('reducers > notes', () => {
  beforeEach(() => {
    stub(Moment, 'unix', () => 1476473790)
  })

  afterEach(() => {
    Moment.unix.restore()
  })

  it('returns an action object with the correct payload when saving a note', () => {
    const action = {
      type: 'SAVE_NOTE',
      payload: mockState.notes[0]
    }
    const expectedResult = [
      {
        ...mockState.notes[0],
        updated_at: Moment().unix()
      },
      mockState.notes[1],
      mockState.notes[2]
    ]

    expect(notes(mockState.notes, action)).to.deep.equal(expectedResult)
  })

  it('returns an action object with the correct payload when selecting a note', () => {
    const action = {
      type: 'SELECT_NOTE',
      payload: 2
    }
    const expectedResult = [
      {
        ...mockState.notes[0],
        selected: false
      },
      {
        ...mockState.notes[1],
        selected: true
      },
      {
        ...mockState.notes[2],
        selected: false
      }
    ]

    expect(notes(mockState.notes, action)).to.deep.equal(expectedResult)
  })

  it('returns the current state when unknow actions is fired', () => {
    const action = {
      type: 'YOLO',
      payload: 'This should not modify the state'
    }

    expect(notes(mockState, action)).to.deep.equal(mockState)
  })

  it('uses the default state when none provided', () => {
    const action = {}

    expect(notes(undefined, action)).to.deep.equal([])
  })
})
