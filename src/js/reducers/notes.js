import Moment from 'moment'
import { SELECT_NOTE, NEW_NOTE, SAVE_NOTE, DELETE_NOTE } from 'constants/actionTypes'
import { newEmptyNote, getMostRecentNote } from 'utils/notes'

export default function notes (state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SELECT_NOTE:
      return state.map((note) => ({ ...note, selected: note.id === payload }))

    case NEW_NOTE:
      const newNoteId = Math.max(...state.map((note) => note.id)) + 1
      const allNotesDeselected = state.map((note) => ({ ...note, selected: false }))
      return [...allNotesDeselected, newEmptyNote(newNoteId)]

    case SAVE_NOTE:
      const updatedNote = { ...payload, updated_at: Moment().unix() }
      const stateWithUpdatedNote = state.map((note) => note.selected ? updatedNote : note)
      window.localStorage.setItem('notes', JSON.stringify(stateWithUpdatedNote))
      return stateWithUpdatedNote

    case DELETE_NOTE:
      const newSelectedNote = getMostRecentNote(state, [payload])
      const stateWithoutDeletedNote = state
        .filter((note) => note.id !== payload)
        .map((note) => ({ ...note, selected: note.id === newSelectedNote.id }))
      window.localStorage.setItem('notes', JSON.stringify(stateWithoutDeletedNote))
      return stateWithoutDeletedNote

    default:
      return state
  }
}
