import React, { PropTypes } from 'react'
import TextareaAutosize from 'react-autosize-textarea'

import CSS from './NoteBody.css'

const NoteBody = ({ copy, ...rest }) => {
  return <TextareaAutosize
    value={copy}
    name="Copy"
    className={CSS.Textarea}
    {...rest} />
}

NoteBody.propTypes = {
  copy: PropTypes.string.isRequired
}

export default NoteBody
