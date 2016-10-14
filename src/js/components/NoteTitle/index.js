import React, { PropTypes } from 'react'

import CSS from './NoteTitle.css'

const NoteTitle = ({ title, ...rest }) => {
  return <input
    name="Title"
    value={title}
    placeholder="Untitled note..."
    className={CSS.NoteTitle}
    {...rest} />
}

NoteTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default NoteTitle
