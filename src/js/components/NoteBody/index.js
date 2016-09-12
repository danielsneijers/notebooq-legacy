import React, { PropTypes } from 'react'
import TextareaAutosize from 'react-autosize-textarea'

import CSS from './NoteBody.css'

const NoteBody = ({ note, saveCopy }) => {
  const { copy } = note
  return <TextareaAutosize
    value={copy}
    name="Copy"
    className={CSS.Textarea}
    onChange={saveCopy} />
}

NoteBody.propTypes = {
  note: PropTypes.object,
  saveCopy: PropTypes.func.isRequired
}

export default NoteBody
