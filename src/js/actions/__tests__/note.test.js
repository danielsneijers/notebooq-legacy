import { expect } from 'chai'
import { mockNote } from 'test/fixtures'
import { selectNote, newNote, saveNote, deleteNote } from '../note'
import { SELECT_NOTE, NEW_NOTE, SAVE_NOTE, DELETE_NOTE } from 'constants/actionTypes'

describe('actions > note', () => {
  describe('selectNote', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = {
        type: SELECT_NOTE,
        payload: 1
      }

      expect(selectNote(1)).to.deep.equal(expectedResult)
    })
  })

  describe('newNote', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = {
        type: NEW_NOTE
      }

      expect(newNote()).to.deep.equal(expectedResult)
    })
  })

  describe('saveNote', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = {
        type: SAVE_NOTE,
        payload: mockNote,
        debounceSync: 2000
      }

      expect(saveNote(mockNote)).to.deep.equal(expectedResult)
    })
  })

  describe('saveNote', () => {
    it('returns an action object with the correct payload', () => {
      const expectedResult = {
        type: DELETE_NOTE,
        payload: mockNote.id
      }

      expect(deleteNote(mockNote.id)).to.deep.equal(expectedResult)
    })
  })
})
