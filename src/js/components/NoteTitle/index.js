import React, { Component, PropTypes } from 'react'

import CSS from './NoteTitle.css'

class NoteTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool
  }

  static defaultProps = {
    autoFocus: false
  };

  componentWillReceiveProps (nextProps) {
    if (nextProps.autoFocus) {
      this._focusTimeout = setTimeout(() => this._input.focus(), 200)
    }
  }

  componentWillUnmount () {
    clearTimeout(this._focusTimeout)
  }

  render () {
    const { title, ...rest } = this.props

    return (
      <input
        ref={(c) => { this._input = c }}
        name="Title"
        value={title}
        placeholder="Untitled note..."
        className={CSS.NoteTitle}
        {...rest}
      />
    )
  }
}

export default NoteTitle
