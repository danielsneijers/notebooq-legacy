import { SAVE_TITLE, SAVE_COPY, SELECT_NOTE } from 'constants/actionTypes'
import { renameFile, getRenamedFilePath, saveCopyToFile } from 'utils/file'
import { noteFromTemplate } from 'utils/notes'

export default function note (state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_TITLE:
      renameFile(state.path, payload)
      return { ...state, title: payload, path: getRenamedFilePath(state.path, payload) }

    case SAVE_COPY:
      saveCopyToFile(state.path, payload)
      return { ...state, copy: action.payload }

    case SELECT_NOTE:
      return {
        ...state,
        ...noteFromTemplate(payload)
      }

    default:
      return state
  }
}
