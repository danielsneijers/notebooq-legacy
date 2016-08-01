export const SAVE_TITLE = 'SAVE_TITLE'

export function saveTitle (event) {
  return {
    type: SAVE_TITLE,
    payload: event.currentTarget.value,
    meta: {
      debounce: 'simple'
    }
  }
}
