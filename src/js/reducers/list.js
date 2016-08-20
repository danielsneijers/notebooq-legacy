import { GET_NOTES } from 'constants/actionTypes'
import { getNotesTree } from 'utils/notes'

export default function list (state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case GET_NOTES:
      return {
        ...state,
        notes: getNotesTree(payload)
      }

    default:
      return state
  }
}
