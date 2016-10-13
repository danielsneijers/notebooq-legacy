/* eslint-disable no-debugger */
import { SAVE_TITLE, SAVE_COPY, SELECT_NOTE } from 'constants/actionTypes'

export default function note (state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_TITLE:
      const noteWithUpdatedTitle = {
        ...state.find((note) => note.selected),
        title: payload
      }
      const newStateWithTitle = state.map((note) => note.selected ? noteWithUpdatedTitle : note)
      localStorage.setItem('notes', JSON.stringify(newStateWithTitle))
      return newStateWithTitle

    case SAVE_COPY:
      const noteWithUpdatedCopy = {
        ...state.find((note) => note.selected),
        copy: payload
      }
      const newStateWithCopy = state.map((note) => note.selected ? noteWithUpdatedCopy : note)
      localStorage.setItem('notes', JSON.stringify(newStateWithCopy))
      return newStateWithCopy

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
