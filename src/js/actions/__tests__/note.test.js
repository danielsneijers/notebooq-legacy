import { expect } from 'chai'
import { mockNote } from 'test/fixtures'
import { saveNote, selectNote } from '../note'
import { SAVE_NOTE, SELECT_NOTE } from 'constants/actionTypes'

describe('actions > note', () => {
  describe('saveNote', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = {
        type: SAVE_NOTE,
        payload: mockNote
      }

      expect(saveNote(mockNote)).to.deep.equal(expectedResult)
    })
  })

  describe('selectNote', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = {
        type: SELECT_NOTE,
        payload: 1
      }

      expect(selectNote(1)).to.deep.equal(expectedResult)
    })
  })
})
