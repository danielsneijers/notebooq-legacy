import React, { PropTypes } from 'react'

import CSS from './NoteBody.css'

const NoteBody = ({ copy, saveCopy }) => {
  return <textarea
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
