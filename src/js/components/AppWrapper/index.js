import React, { PropTypes } from 'react'
import './Reset.css'
import './Typography.css'

const AppWrapper = ({ children }) => (<div>{children}</div>)

AppWrapper.propTypes = {
  children: PropTypes.element.isRequired
}

export default AppWrapper
