import { NOTES_ROOT_FOLDER } from 'constants/app'
import { GET_NOTES } from 'constants/actionTypes'

export function getNotes (path = NOTES_ROOT_FOLDER) {
  return {
    type: GET_NOTES,
    payload: path
  }
}
