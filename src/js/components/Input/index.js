import React, { PropTypes } from 'react'

const Input = ({ title, saveTitle }) => (<input value={title} onChange={saveTitle} />)

Input.propTypes = {
  title: PropTypes.string,
  saveTitle: PropTypes.func.isRequired
}

export default Input
