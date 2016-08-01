import { SAVE_TITLE } from 'actions/input'

export default function title (state = '', action) {
  switch (action.type) {
    case SAVE_TITLE:
      return { ...state, title: action.payload }
    default:
      return state
  }
}
