import React, { Component, PropTypes } from 'react'
import RenderMarkdown from 'instances/renderer'
import SidebarContainer from 'containers/SidebarContainer'
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
    this.handleDeleteNote = this.handleDeleteNote.bind(this)
    this.renderNoteBody = this.renderNoteBody.bind(this)

    this.state = { focusTitle: false }
  }

  static propTypes = {
    note: PropTypes.object.isRequired,
    showMarkdown: PropTypes.bool.isRequired,
    selectNote: PropTypes.func.isRequired,
    saveNote: PropTypes.func.isRequired,
    newNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    toggleMarkdownView: PropTypes.func.isRequired
  }

  static defaultProps = {
    showMarkdown: true
  }

  componentWillReceiveProps (nextProps) {
    const hasTitle = !!nextProps.note.title

    this.setState({ focusTitle: !hasTitle })
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

  handleDeleteNote () {
    const { note, deleteNote } = this.props

    deleteNote(note.id)
  }

  renderNoteBody () {
    const { note, showMarkdown } = this.props

    return showMarkdown
      ? <NoteBody body={note.body} onChange={this.handleCopyChange} />
      : <NoteBodyHtml body={RenderMarkdown(note.body)} />
  }

  render () {
    const { note, newNote, toggleMarkdownView } = this.props

    return (
      <div className={CSS.note}>
        <button onClick={toggleMarkdownView}>Toggle Markdown</button>
        <button onClick={newNote}>New note</button>
        <button onClick={this.handleDeleteNote}>Delete note</button>
        <SidebarContainer />
        <NoteTitle
          title={note.title}
          onChange={this.handleTitleChange}
          autoFocus={this.state.focusTitle}
        />
        {this.renderNoteBody()}
      </div>
    )
  }
}

export default Note
