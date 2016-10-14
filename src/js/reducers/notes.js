import Moment from 'moment'
import { SAVE_NOTE, SELECT_NOTE } from 'constants/actionTypes'

export default function note (state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_NOTE:
      const updatedNote = {
        ...payload,
        updated_at: Moment().unix()
      }
      const newState = state.map((note) => note.selected ? updatedNote : note)
      localStorage.setItem('notes', JSON.stringify(newState))
      return newState

    case SELECT_NOTE:
      return state.map((note) => {
        return {
          ...note,
          selected: note.id === payload
        }
      })

    default:
      return state
  }
}
