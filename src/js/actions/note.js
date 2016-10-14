import { SAVE_NOTE, SELECT_NOTE } from 'constants/actionTypes'

export function saveNote (note) {
  return {
    type: SAVE_NOTE,
    payload: note
  }
}

export function selectNote (id) {
  return {
    type: SELECT_NOTE,
    payload: id
  }
}
