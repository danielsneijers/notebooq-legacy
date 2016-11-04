import { expect } from 'chai'
import { getNotes, getSelectedNote, getNotesSortedByDate } from '../noteSelectors'
import { mockState, mockNotesList, mockNote } from 'test/fixtures'

describe('selectors > noteSelectors', () => {
  describe('getNotes', () => {
    it('returns all notes from the app state', () => {
      expect(getNotes(mockState)).to.deep.equal(mockNotesList)
    })

    it('returns all notes from the app state excluding the notes provided', () => {
      const expectedResult = mockNotesList.filter((note) => note.id !== 1)

      expect(getNotes(mockState, [1])).to.deep.equal(expectedResult)
    })

    it('returns an empty array when no notes are found', () => {
      const stateWithoutNotes = {
        ...mockState,
        notes: []
      }
      expect(getNotes(stateWithoutNotes)).to.deep.equal([])
    })

    it('returns an empty array when no state is found', () => {
      expect(getNotes()).to.deep.equal([])
    })
  })

  describe('getSelectedNote', () => {
    it('returns the selected note from the app state', () => {
      expect(getSelectedNote(mockState)).to.deep.equal(mockNote)
    })

    it('returns an empty object when no notes are selected', () => {
      const noSelectedNotes = mockNotesList.map((note) => ({ ...note, selected: false }))
      const stateWithoutNotes = {
        ...mockState,
        notes: noSelectedNotes
      }

      expect(getSelectedNote(stateWithoutNotes)).to.deep.equal({})
    })
  })

  describe('getNotesSortedByDate', () => {
    it('returns all notes from the app state sorted by date', () => {
      const notes = [...mockNotesList]
      const sortedNotes = notes.sort((a, b) => a.updated_at < b.updated_at)
      expect(getNotesSortedByDate(mockState)).to.deep.equal(sortedNotes)
    })

    it('returns an empty array when no state is found', () => {
      expect(getNotesSortedByDate()).to.deep.equal([])
    })
  })
})
