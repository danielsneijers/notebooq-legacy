import { SAVE_COPY } from 'actions/noteBody'

export default function input (state = {}, action) {
  switch (action.type) {
    case SAVE_COPY:
      return { ...state, copy: action.payload }
    default:
      return state
  }
}
