import { SET_FILE_PATH, SAVE_TITLE, SAVE_COPY } from 'constants/actionTypes'

export function setFilePath (path) {
  return {
    type: SET_FILE_PATH,
    payload: path
  }
}

export function saveTitle (event) {
  return {
    type: SAVE_TITLE,
    payload: event.currentTarget.value,
    meta: {
      debounce: 'simple'
    }
  }
}

export function saveCopy (event) {
  return {
    type: SAVE_COPY,
    payload: event.currentTarget.value,
    meta: {
      debounce: 'simple'
    }
  }
}
