import { TOGGLE_MARKDOWN_VIEW } from 'constants/actionTypes'

export default function notes (state = { markdown: true }, action) {
  const { type } = action

  switch (type) {
    case TOGGLE_MARKDOWN_VIEW:
      return {
        ...state,
        markdown: !state.markdown
      }

    default:
      return state
  }
}
