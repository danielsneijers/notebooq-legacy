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

export const getNotesSortedByDate = createSelector(
  [ getNotes ],
  (notes) => notes.sort((a, b) => a.updated_at < b.updated_at)
)
