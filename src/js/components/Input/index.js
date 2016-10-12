import React, { PropTypes } from 'react'

import CSS from './Input.css'

const Input = ({ note, saveTitle }) => {
  const { title } = note

  return <input
    name="Title"
    value={title}
    placeholder="Untitled note..."
    className={CSS.Input}
    onChange={saveTitle} />
}

Input.propTypes = {
  note: PropTypes.object,
  saveTitle: PropTypes.func.isRequired
}

export default Input
