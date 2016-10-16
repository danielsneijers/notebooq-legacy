import { TOGGLE_MARKDOWN_VIEW } from 'constants/actionTypes'

export default function notes (state = [], action) {
  const { type } = action

  switch (type) {
    case TOGGLE_MARKDOWN_VIEW:
      const newState = {
        ...state,
        markdown: !state.markdown
      }
      return newState

    default:
      return state
  }
}
