export const SAVE_TITLE = 'SAVE_TITLE'
export const SAVE_COPY = 'SAVE_COPY'

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
