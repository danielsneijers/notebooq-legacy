import { SELECT_NOTE, SAVE_NOTE } from 'constants/actionTypes'

export function saveNote (note) {
  return {
    type: SAVE_NOTE,
    payload: note
  }
}

export function selectNote (path) {
  return {
    type: SELECT_NOTE,
    payload: path
  }
}
