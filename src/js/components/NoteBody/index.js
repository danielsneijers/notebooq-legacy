import React, { PropTypes } from 'react'
import TextareaAutosize from 'react-autosize-textarea'

import CSS from './NoteBody.css'

const NoteBody = ({ copy, saveCopy }) => {
  return <TextareaAutosize
    defaultValue={copy}
    name="Copy"
    className={CSS.Textarea}
    onChange={saveCopy} />
}

NoteBody.propTypes = {
  copy: PropTypes.string,
  saveCopy: PropTypes.func.isRequired
}

export default NoteBody
