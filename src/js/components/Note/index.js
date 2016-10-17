import React, { Component, PropTypes } from 'react'
import RenderMarkdown from 'instances/renderer'
import SidebarContainer from 'containers/SidebarContainer'
import MarkdownToggle from 'components/MarkdownToggle'
import NoteTitle from 'components/NoteTitle'
import NoteBody from 'components/NoteBody'
import NoteBodyHtml from 'components/NoteBodyHtml'

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
    showMarkdown: true
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
      : <NoteBodyHtml body={RenderMarkdown(note.body)} />
  }

  render () {
    const { note, toggleMarkdownView } = this.props

    return (
      <div className={CSS.Note}>
        <MarkdownToggle onClick={toggleMarkdownView}>Toggle Markdown</MarkdownToggle>
        <SidebarContainer />
        <NoteTitle title={note.title} onChange={this.handleTitleChange} />
        {this.renderNoteBody()}
      </div>
    )
  }
}

export default Note
