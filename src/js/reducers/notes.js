import Moment from 'moment'
import { SELECT_NOTE, NEW_NOTE, SAVE_NOTE, DELETE_NOTE } from 'constants/actionTypes'
import { newEmptyNote, getMostRecentNote, getHighestNoteId } from 'utils/notes'

export default function notes (state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SELECT_NOTE:
      return state.map((note) => ({ ...note, selected: note.id === payload }))

    case NEW_NOTE:
      const newNoteId = getHighestNoteId(state) + 1
      const allNotesDeselected = state.map((note) => ({ ...note, selected: false }))
      return [...allNotesDeselected, newEmptyNote(newNoteId)]

    case SAVE_NOTE:
      const updatedNote = { ...payload, updated_at: Moment().unix() }
      return state.map((note) => note.selected ? updatedNote : note)

    case DELETE_NOTE:
      const newSelectedNote = getMostRecentNote(state, [payload])
      return state
        .filter((note) => note.id !== payload)
        .map((note) => ({ ...note, selected: note.id === newSelectedNote.id }))

    default:
      return state
  }
}
