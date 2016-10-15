import { expect } from 'chai'
import { getMostRecentNote, getSelectedNote } from '../notes'
import { mockNotesList, mockNote } from 'test/fixtures'

describe('utils > notes', () => {
  describe('getMostRecentNote', () => {
    it('returns the last modified note', () => {
      expect(getMostRecentNote(mockNotesList)).to.deep.equal(mockNotesList[1])
    })

    it('returns an empty object when there are no notes', () => {
      expect(getMostRecentNote(null)).to.deep.equal({})
    })
  })

  describe('getSelectedNote', () => {
    it('returns the selected note when there is one', () => {
      expect(getSelectedNote(mockNotesList)).to.deep.equal(mockNote)
    })

    it('returns an empty object when there are no selected notes', () => {
      const noSelectedNotes = mockNotesList.map((note) => ({ ...note, selected: false }))
      expect(getSelectedNote(noSelectedNotes)).to.deep.equal({})
    })

    it('returns an empty object when there are no notes', () => {
      expect(getSelectedNote(null)).to.deep.equal({})
    })
  })
})
