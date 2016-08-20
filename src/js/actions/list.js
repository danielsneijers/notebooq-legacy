import { GET_NOTES } from 'constants/actionTypes'

export function getNotes (path) {
  return {
    type: GET_NOTES,
    payload: path
  }
}
