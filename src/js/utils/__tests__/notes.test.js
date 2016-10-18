import Moment from 'moment'
import { expect } from 'chai'
import { stub } from 'sinon'
import { NoteIdFormatException } from 'utils/errors'
import { newEmptyNote, getMostRecentNote, getSelectedNote } from '../notes'
import { mockNotesList, mockNote } from 'test/fixtures'

describe('utils > notes', () => {
  describe('newEmptyNote', () => {
    beforeEach(() => {
      stub(Moment, 'unix', () => 1476473790)
    })

    afterEach(() => {
      Moment.unix.restore()
    })

    it('returns a new empty note object', () => {
      const newNote = {
        id: 4,
        folder: 'awesomeFolder',
        title: '',
        body: '',
        selected: true,
        created_at: Moment().unix(),
        updated_at: Moment().unix()
      }

      expect(newEmptyNote(4, 'awesomeFolder')).to.deep.equal(newNote)
    })

    it('returns a new empty note object in the default folder when none provided', () => {
      const newNote = {
        id: 4,
        folder: 'default',
        title: '',
        body: '',
        selected: true,
        created_at: Moment().unix(),
        updated_at: Moment().unix()
      }

      expect(newEmptyNote(4)).to.deep.equal(newNote)
    })

    it('throws an error when no ID is provided', () => {
      const err = new NoteIdFormatException('This is not a valid note id')

      expect(newEmptyNote.bind('a')).to.throw(err)
    })
  })

  describe('getMostRecentNote', () => {
    it('returns the last modified note', () => {
      expect(getMostRecentNote(mockNotesList)).to.deep.equal(mockNotesList[1])
    })

    it('returns the last modified note, not including excluded notes', () => {
      const excludedNotes = [2]
      expect(getMostRecentNote(mockNotesList, excludedNotes)).to.deep.equal(mockNotesList[0])
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
