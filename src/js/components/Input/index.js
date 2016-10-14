import React, { PropTypes } from 'react'

import CSS from './Input.css'

const Input = ({ title, ...rest }) => {
  return <input
    name="Title"
    value={title}
    placeholder="Untitled note..."
    className={CSS.Input}
    {...rest} />
}

Input.propTypes = {
  title: PropTypes.string.isRequired
}

export default Input
