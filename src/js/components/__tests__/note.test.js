import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { mockNote } from 'test/fixtures'
import Note from '../Note'
import NoteTitle from 'components/NoteTitle'
import NoteBody from 'components/NoteBody'
import NoteBodyHtml from 'components/NoteBodyHtml'
import CSS from '../Note/Note.css'

describe('components > Note', () => {
  const noteProps = {
    saveNote: spy(),
    selectNote: spy(),
    deleteNote: spy(),
    newNote: spy(),
    toggleMarkdownView: spy()
  }

  afterEach(() => {
    const propKeys = Object.keys(noteProps)

    propKeys.map((key) => noteProps[key].reset())
  })

  it('renders a title and body when a note is passed', () => {
    const wrapper = shallow(<Note note={mockNote} {...noteProps} />)
    const wrapper2 = shallow(<Note note={mockNote} showMarkdown={false} {...noteProps} />)

    expect(wrapper.hasClass(CSS.note)).to.be.true
    expect(wrapper.containsAllMatchingElements([
      <NoteTitle title={mockNote.title} />,
      <NoteBody body={mockNote.body} />
    ])).to.be.true

    expect(wrapper2.containsAllMatchingElements([
      <NoteTitle title={mockNote.title} />,
      <NoteBodyHtml />
    ])).to.be.true
  })

  it('saves the note when onTitleChange is called', () => {
    const wrapper = shallow(<Note note={mockNote} {...noteProps} />)
    const event = { currentTarget: { value: 'nice change' } }
    const expectedArgument = {
      ...mockNote,
      title: event.currentTarget.value
    }

    expect(noteProps.saveNote.called).to.be.false

    wrapper.instance().handleTitleChange(event)

    expect(noteProps.saveNote.calledOnce).to.be.true
    expect(noteProps.saveNote.calledWith(expectedArgument)).to.be.true
  })

  it('saves the note when onCopyChange is called', () => {
    const wrapper = shallow(<Note note={mockNote} {...noteProps} />)
    const event = { currentTarget: { value: 'nice change' } }
    const expectedArgument = {
      ...mockNote,
      body: event.currentTarget.value
    }

    expect(noteProps.saveNote.called).to.be.false

    wrapper.instance().handleCopyChange(event)

    expect(noteProps.saveNote.calledOnce).to.be.true
    expect(noteProps.saveNote.calledWith(expectedArgument)).to.be.true
  })

  it('saves the note when onCopyChange is called', () => {
    const wrapper = shallow(<Note note={mockNote} {...noteProps} />)

    expect(noteProps.deleteNote.called).to.be.false

    wrapper.instance().handleDeleteNote(mockNote.id)

    expect(noteProps.deleteNote.calledOnce).to.be.true
    expect(noteProps.deleteNote.calledWith(mockNote.id)).to.be.true
  })
})
