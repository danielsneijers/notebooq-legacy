export const SAVE_COPY = 'SAVE_COPY'

export function saveCopy (event) {
  return {
    type: SAVE_COPY,
    payload: event.currentTarget.value,
    meta: {
      debounce: 'simple'
    }
  }
}
