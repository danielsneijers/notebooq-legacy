import { SELECT_NOTE, NEW_NOTE, SAVE_NOTE, DELETE_NOTE } from 'constants/actionTypes'

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

export function newNote () {
  return {
    type: NEW_NOTE
  }
}

export function deleteNote (id) {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}
