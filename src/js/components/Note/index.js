import React, { Component, PropTypes } from 'react'
import SidebarContainer from 'containers/SidebarContainer'
import Input from 'components/Input'
import NoteBody from 'components/NoteBody'

import CSS from './Note.css'

class Note extends Component {
  constructor (props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleCopyChange = this.handleCopyChange.bind(this)
  }

  static propTypes = {
    note: PropTypes.object.isRequired,
    saveNote: PropTypes.func.isRequired
  }

  handleTitleChange (event) {
    this.props.saveNote({
      ...this.props.note,
      title: event.currentTarget.value
    })
  }

  handleCopyChange (event) {
    this.props.saveNote({
      ...this.props.note,
      copy: event.currentTarget.value
    })
  }

  render () {
    const { note } = this.props

    return (
      <div className={CSS.Note}>
        <SidebarContainer />
        <Input title={note.title} onChange={this.handleTitleChange} />
        <NoteBody copy={note.copy} onChange={this.handleCopyChange} />
      </div>
    )
  }
}

export default Note
