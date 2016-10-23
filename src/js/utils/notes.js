import Moment from 'moment'
import { NoteIdFormatException } from 'utils/errors'

export function newEmptyNote (id, folder = 'default') {
  if (!id || !Number.isInteger(id)) throw new NoteIdFormatException(id)

  const timestamp = Moment().unix()

  return {
    id,
    folder,
    title: '',
    body: '',
    selected: true,
    created_at: timestamp,
    updated_at: timestamp
  }
}

export function getMostRecentNote (notes, excludeNoteIds = []) {
  if (!notes || !notes.length) return {}

  const mostRecentNote = notes.reduce((prev, curr) => {
    return excludeNoteIds.includes(curr.id) || (prev.updated_at > curr.updated_at)
      ? prev
      : curr
  })

  return mostRecentNote
}

export function getHighestNoteId (notes) {
  if (!notes || !notes.length) return 0

  return Math.max(...notes.map((note) => note.id))
}
