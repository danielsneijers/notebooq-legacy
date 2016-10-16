import React, { Component, PropTypes } from 'react'
import RenderMarkdown from 'instances/renderer'
import SidebarContainer from 'containers/SidebarContainer'
import Button from 'components/Button'
import NoteTitle from 'components/NoteTitle'
import NoteBody from 'components/NoteBody'

import CSS from './Note.css'

class Note extends Component {
  /* istanbul ignore next: constructors won't be tested */
  constructor (props) {
    super(props)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleCopyChange = this.handleCopyChange.bind(this)
    this.renderNoteBody = this.renderNoteBody.bind(this)
  }

  static propTypes = {
    note: PropTypes.object.isRequired,
    showMarkdown: PropTypes.bool.isRequired,
    saveNote: PropTypes.func.isRequired,
    toggleMarkdownView: PropTypes.func.isRequired
  }

  static defaultProps = {
    showMarkdown: false
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
      body: event.currentTarget.value
    })
  }

  renderNoteBody () {
    const { note, showMarkdown } = this.props

    return showMarkdown
      ? <NoteBody body={note.body} onChange={this.handleCopyChange} />
      : <div dangerouslySetInnerHTML={{__html: RenderMarkdown(note.body)}} />
  }

  render () {
    const { note, toggleMarkdownView } = this.props

    return (
      <div className={CSS.Note}>
        <Button onClick={toggleMarkdownView}>Toggle Markdown</Button>
        <SidebarContainer />
        <NoteTitle title={note.title} onChange={this.handleTitleChange} />
        {this.renderNoteBody()}
      </div>
    )
  }
}

export default Note
