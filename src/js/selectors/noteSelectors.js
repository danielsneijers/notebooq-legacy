import { createSelector } from 'reselect'

export function getNotes (state = {}, excludeNoteIds = []) {
  return state && state.notes
    ? state.notes.filter((note) => !excludeNoteIds.includes(note.id))
    : []
}

export const getSelectedNote = createSelector(
  [ getNotes ],
  (notes) => notes.find((note) => note.selected) || {}
)
