import { SAVE_TITLE, SAVE_COPY, SELECT_NOTE } from 'constants/actionTypes'

export function saveTitle (event) {
  return {
    type: SAVE_TITLE,
    payload: event.currentTarget.value
  }
}

export function saveCopy (event) {
  return {
    type: SAVE_COPY,
    payload: event.currentTarget.value
  }
}

export function selectNote (path) {
  return {
    type: SELECT_NOTE,
    payload: path
  }
}
