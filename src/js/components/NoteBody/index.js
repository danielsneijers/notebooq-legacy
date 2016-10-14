import React, { PropTypes } from 'react'
import TextareaAutosize from 'react-autosize-textarea'

import CSS from './NoteBody.css'

const NoteBody = ({ body, ...rest }) => {
  return <TextareaAutosize
    value={body}
    name="Copy"
    className={CSS.Textarea}
    {...rest} />
}

NoteBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default NoteBody
