// import fs from 'fs'
// import path from 'path'
import { SAVE_TITLE, SAVE_COPY } from 'actions/note'

export default function note (state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case SAVE_TITLE:
      // fs.readFile('/Users/danielsneijers/Dropbox/DevNotes/Personal/Test Note.md', 'utf8', (err, data) => {
      //   if (err) return console.log(err)
      //   console.log(data)
      //   // data is the contents of the text file we just read
      // })
      return { ...state, title: payload }
    case SAVE_COPY:
      return { ...state, copy: action.payload }
    default:
      return state
  }
}
