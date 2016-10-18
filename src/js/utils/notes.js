import Moment from 'moment'
import { NoteIdFormatException } from 'utils/errors'

export function newEmptyNote (id, folder = 'default') {
  if (!id || !Number.isInteger(id)) throw new NoteIdFormatException(id)

  const timestamp = Moment().unix()

  return {
    id,
    folder,
    selected: true,
    created_at: timestamp,
    updated_at: timestamp
  }
}

export function getMostRecentNote (notes, excludeNoteIds = []) {
  if (!notes) return {}

  const mostRecentNote = notes.reduce((prev, curr) => {
    return excludeNoteIds.includes(curr.id) || (prev.updated_at > curr.updated_at)
      ? prev
      : curr
  })

  return mostRecentNote
}

export function getSelectedNote (notes) {
  if (!notes) return {}

  return notes.find((note) => note.selected) || {}
}
