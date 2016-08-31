import React, { PropTypes } from 'react'

import CSS from './Input.css'

const Input = ({ title, saveTitle }) => {
  return <input
    name="Title"
    value={title}
    placeholder="Untitled note..."
    className={CSS.Input}
    onChange={saveTitle} />
}

Input.propTypes = {
  title: PropTypes.string,
  saveTitle: PropTypes.func.isRequired
}

export default Input
